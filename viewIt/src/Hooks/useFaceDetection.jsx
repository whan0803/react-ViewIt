import { useEffect, useRef } from "react";
import * as faceApi from "face-api.js";

const useFaceDetection = (videoRef, canvasRef) => {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const loadModels = async () => {
      await Promise.all([
        faceApi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceApi.nets.faceExpressionNet.loadFromUri("/models"),
      ]);
      console.log("face-api 연결 완료");

      const video = videoRef.current;
      if (video.readyState >= 2) {
        startDetection(video, canvasRef.current);
      } else {
        video.onloadedmetadata = () => startDetection(video, canvasRef.current);
      }
    };

    const startDetection = (video, canvas) => {
      // video 실제 픽셀 크기로 canvas 맞춤
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      const displaySize = {
        width: video.videoWidth,
        height: video.videoHeight,
      };
      faceApi.matchDimensions(canvas, displaySize);

      intervalRef.current = setInterval(async () => {
        if (!video || video.paused || video.ended) return;

        const result = await faceApi
          .detectSingleFace(video, new faceApi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (result) {
          const resized = faceApi.resizeResults(result, displaySize);

          // 얼굴 박스
          const box = resized.detection.box;
          ctx.strokeStyle = "lime";
          ctx.lineWidth = 1;
          ctx.strokeRect(box.x, box.y, box.width, box.height);

          // 가장 확률 높은 표정 표시
          const expressions = resized.expressions;
          const maxExpression = Object.keys(expressions).reduce((a, b) =>
            expressions[a] > expressions[b] ? a : b,
          );

          // 텍스트 배경
          ctx.fillStyle = "lime";
          ctx.fillRect(
            box.x,
            box.y - 24,
            ctx.measureText(maxExpression).width + 10,
            24,
          );

          // 텍스트
          ctx.fillStyle = "black";
          ctx.font = "16px Arial";
          ctx.fillText(maxExpression, box.x + 5, box.y - 6);
        }
      }, 100);
    };

    loadModels();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [videoRef, canvasRef]);
};

export default useFaceDetection;
