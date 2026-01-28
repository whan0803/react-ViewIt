import styles from "./Buttons.module.css";
import useStt from "../Hooks/useStt";
import useSendFeedback from "../Hooks/useSendFeedback";

const Buttons = ({
  startInterview,
  nextQuestion,
  started,
  isFinished,
  emotionCount,
}) => {
  const { transcript, startStt, stopStt } = useStt();
  const { requestFeedback, loading } = useSendFeedback();

  const handleStart = () => {
    startStt();
    startInterview();
  };

  const handleNext = () => {
    if (isFinished) {
      stopStt();
      return;
    }
    nextQuestion();
  };

  const handleFeedback = () => {
    requestFeedback(emotionCount, transcript);
  };

  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.button}
        onClick={handleStart}
        disabled={started}
      >
        면접시작
      </button>

      <button
        className={styles.button}
        onClick={handleNext}
        disabled={!started}
      >
        다음질문
      </button>

      <button
        className={styles.button}
        onClick={handleFeedback}
        disabled={loading}
      >
        {loading ? "피드백 생성중..." : "피드백받기"}
      </button>
    </div>
  );
};

export default Buttons;
