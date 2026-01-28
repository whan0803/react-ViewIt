import styles from "./FeedbackMain.module.css";
import ai from "../../../assets/robot.jpeg";
import { useEffect, useState } from "react";

const FeedbackMain = ({ feedback }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!feedback) return;

    let index = 0;
    setDisplayText("");

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + feedback[index]);
      index++;

      if (index >= feedback.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [feedback]);

  return (
    <div className={styles.FeedbackMain}>
      <img className={styles.aiImg} src={ai} alt="ai" />
      <div className={styles.messageBox}>
        <p className={styles.text}>{displayText}</p>
      </div>
    </div>
  );
};

export default FeedbackMain;
