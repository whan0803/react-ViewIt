import { useState } from "react";

const ERROR_QUESTION =
  "⚠️ 면접 질문을 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const startInterview = async () => {
    if (started) return;

    try {
      const res = await fetch("http://localhost:5002/questions");

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("Invalid question data");
      }

      setQuestions(data);
      setCurrentIndex(0);
      setStarted(true);
      setHasError(false);
    } catch (err) {
      console.error("❌ 질문 로딩 실패:", err);

      // 👉 예외 상황용 질문 세팅
      setQuestions([ERROR_QUESTION]);
      setCurrentIndex(0);
      setStarted(true);
      setHasError(true);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isFinished = currentIndex >= questions.length - 1;

  return {
    started,
    hasError,
    currentQuestion: isFinished
      ? hasError
        ? ERROR_QUESTION
        : "면접이 끝났습니다. 피드백 받기를 클릭해주세요"
      : questions[currentIndex],
    startInterview,
    nextQuestion,
    isFinished,
  };
};

export default useQuestions;
