import { useEffect, useRef, useState } from "react";
import * as faceApi from "face-api.js";

const useFaceDetection = (videoRef, canvasRef) => {
  const intervalRef = useRef(null);
  const lastCountTimeRef = useRef(0);

  const [emotionCount, setEmotionCount] = useState({
    happy: 0,
    sad: 0,
    angry: 0,
    surprised: 0,
    fearful: 0,
    disgusted: 0,
    neutral: 0,
  });

  useEffect(() => {
    if (!videoRef?.current || !canvasRef?.current) return;

    let isMounted = true;

    const loadModels = async () => {
      await Promise.all([
        faceApi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceApi.nets.faceExpressionNet.loadFromUri("/models"),
      ]);

      if (!isMounted) return;

      const video = videoRef.current;

      const waitForVideo = () => {
        if (video.videoWidth > 0 && video.videoHeight > 0 && !video.paused) {
          startDetection(video, canvasRef.current);
        } else {
          requestAnimationFrame(waitForVideo);
        }
      };

      waitForVideo();
    };

    const startDetection = (video, canvas) => {
      if (intervalRef.current) clearInterval(intervalRef.current);

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
        if (!result) return;

        const resized = faceApi.resizeResults(result, displaySize);

        /** 얼굴 박스 */
        const box = resized.detection.box;
        ctx.strokeStyle = "lime";
        ctx.lineWidth = 2;
        ctx.strokeRect(box.x, box.y, box.width, box.height);

        /** 표정 카운트 */
        const expressions = resized.expressions;
        const maxExpression = Object.keys(expressions).reduce((a, b) =>
          expressions[a] > expressions[b] ? a : b,
        );

        const confidence = expressions[maxExpression];
        const now = Date.now();

        if (confidence > 0.6 && now - lastCountTimeRef.current > 1000) {
          lastCountTimeRef.current = now;
          setEmotionCount((prev) => ({
            ...prev,
            [maxExpression]: prev[maxExpression] + 1,
          }));
        }

        /** 텍스트 */
        ctx.font = "16px Arial";
        ctx.fillStyle = "lime";
        ctx.fillText(maxExpression, box.x, box.y - 6);
      }, 150);
    };

    loadModels();

    return () => {
      isMounted = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [videoRef, canvasRef]);

  return { emotionCount };
};

export default useFaceDetection;
