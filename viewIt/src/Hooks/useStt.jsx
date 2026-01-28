import { useState, useRef } from "react";

const useStt = () => {
  const recognitionRef = useRef(null);
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);

  const startStt = () => {
    if (listening) return; // 🔥 중복 실행 방지

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("STT를 지원하지 않습니다");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (e) => {
      let finalText = "";

      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
          finalText += e.results[i][0].transcript + " ";
        }
      }

      if (finalText) {
        setTranscript((prev) => prev + finalText);
      }
    };

    recognition.start();
    recognitionRef.current = recognition;
    setTranscript(""); // 🔥 질문 시작 시 초기화
    setListening(true);

    console.log("🎤 STT 시작");
  };

  const stopStt = () => {
    recognitionRef.current?.stop();
    setListening(false);

    console.log("🛑 STT 종료");
    
  };

  return {
    transcript,
    listening,
    startStt,
    stopStt,
    setTranscript,
  };
};

export default useStt;
