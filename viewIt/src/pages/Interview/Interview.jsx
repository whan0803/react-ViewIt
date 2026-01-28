import Header from "../../components/Header";
import InterviewQuestion from "./InterviewComponent/InterviewQuestion";
import InterViewCamera from "./InterviewComponent/InterViewCamera";
import Footer from "../../components/Footer";
import Buttons from "../../components/Buttons";
import useQuestions from "../../Hooks/useQuestions";
import { useState } from "react";

const Interview = () => {
  const { startInterview, nextQuestion, started, currentQuestion, isFinished } =
    useQuestions();

  const [emotionCount, setEmotionCount] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <InterviewQuestion started={started} currentQuestion={currentQuestion} />
      <InterViewCamera onEmotionUpdate={setEmotionCount} />
      <Buttons
        startInterview={startInterview}
        nextQuestion={nextQuestion}
        started={started}
        isFinished={isFinished}
        emotionCount={emotionCount}
      />
      <Footer />
    </div>
  );
};

export default Interview;
