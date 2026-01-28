import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSendFeedback = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const requestFeedback = async (emotionCount, transcript) => {
    setLoading(true);

    const res = await fetch("http://localhost:4000/sendResult", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emotionCount, transcript }),
    });

    const data = await res.json();

    navigate("/feedback", {
      state: { feedback: data.feedback },
    });

    setLoading(false);
  };

  return { requestFeedback, loading };
};

export default useSendFeedback;
