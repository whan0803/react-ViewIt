const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const PYTHON_DIR = path.resolve(__dirname, "../viewit-python");
const LOG_PATH = path.join(PYTHON_DIR, "interview_log.txt");

app.post("/sendResult", async (req, res) => {
  const { emotionCount, transcript } = req.body;

  try {
    const logData = {
      question: "종합 면접",
      stt: transcript,
      expression: emotionCount,
    };

    fs.writeFileSync(LOG_PATH, JSON.stringify(logData, null, 2), "utf-8");

    const response = await fetch("http://localhost:5002/get_feedback", {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Flask 오류 ${response.status}`);
    }

    const feedbackText = await response.text();

    res.status(200).json({
      message: "피드백 생성 완료",
      feedback: feedbackText,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Node 서버 실행중: http://localhost:${port}`);
});
