import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeedbackMain from "./FeedbackComponent/FeedbackMain";
import styles from "./Feedback.module.css";

const Feedback = () => {
  const { state } = useLocation();
  const feedback = state?.feedback || "";

  return (
    <div className={styles.Feedback}>
      <Header />
      <FeedbackMain feedback={feedback} />
      <Footer />
    </div>
  );
};

export default Feedback;
