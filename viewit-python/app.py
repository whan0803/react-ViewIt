


from flask import Flask, jsonify, send_file
from flask_cors import CORS
from gemini import get_questions, generate_feedback_from_log
import os

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LOG_PATH = os.path.join(BASE_DIR, "interview_log.txt")
FEEDBACK_PATH = os.path.join(BASE_DIR, "feedback.txt")


@app.route("/questions")
def questions():
    try:
        return jsonify(get_questions())
    except Exception as e:
        return jsonify(["질문 생성 중 오류 발생: " + str(e)]), 500


# 🔥 핵심 수정 포인트
@app.route("/get_feedback", methods=["POST"])
def get_feedback():
    try:
        print("📥 Flask: get_feedback 호출됨")

        # Gemini 실행 → feedback.txt 생성
        generate_feedback_from_log()

        if not os.path.exists(FEEDBACK_PATH):
            return "피드백 파일이 존재하지 않습니다.", 404

        # interview_log 초기화
        with open(LOG_PATH, "w", encoding="utf-8") as f:
            f.write("")

        return send_file(FEEDBACK_PATH, mimetype="text/plain")

    except Exception as e:
        print("❌ Flask 오류:", e)
        return str(e), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002, debug=True)
