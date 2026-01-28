import google.generativeai as genai
import json
import os

genai.configure(api_key="AIzaSyBSAuHffPttBt4JzHc_eCMwO5HPvW1D1JA")

def get_questions():
    model = genai.GenerativeModel("models/gemini-2.5-flash")
    prompt = "면접 질문이 한문장씩 나오게 해줘. 부가적인 설명은 하지 말고, 질문은 5개만 출력해줘."
    response = model.generate_content(prompt)

    questions = response.text.strip().split("\n")
    clean_questions = [q.lstrip("0123456789. ").strip() for q in questions if q.strip()]
    return clean_questions[:5]


def generate_feedback_from_log(file_path="interview_log.txt"):
    model = genai.GenerativeModel("models/gemini-2.5-flash")

    if not os.path.exists(file_path):
        return "면접 로그 파일이 존재하지 않습니다."

    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    prompt = (
        "다음은 한 사용자가 면접에서 한 질문과 답변, 표정 데이터입니다.\n"
        "각 항목을 종합하여 이 사람의 면접 태도에 대한 전반적인 피드백을 작성해줘.\n"
        "1. 좋은 점\n2. 개선할 점\n3. 면접을 잘 보는 팁\n\n"
        "문장은 자세히, 최소 5문장 이상으로 길게 써줘. 너무 간결하지 않게 해줘.\n\n"
        "#은 전부 다 빼줘\n\n"
        f"""
질문: {data["question"]}
답변: {data["stt"]}
표정: {data["expression"]}
"""
    )

    response = model.generate_content(prompt)
    answer_text = response.candidates[0].content.parts[0].text.strip()

    with open("feedback.txt", "w", encoding="utf-8") as f:
        f.write(answer_text)

    return answer_text
