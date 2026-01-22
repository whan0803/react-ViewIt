import comment from '../assets/comment.png';
import imogi from '../assets/mood.png';
import mic from '../assets/Mic.png';
import chat from '../assets/chat_bubble.png';

const cardItem = [
    {
        id: 1,
        img : comment,
        title : "자동 면접 질문",
        content: 
        `Gemini Api를 불러와 사용자 
        입력에 따라 상황별 ∙ 직무별 맞춤형면접 질문을 자동으로 생성하는 기능`
    },
    {
        id: 2,
        img : imogi,
        title : "표정인식",
        content: 
        `웹캠을 통해 실시간으로
        표정과 감정을 자동으로 분석하는 기능`
    },
    {
        id: 3,
        img : mic,
        title : "실시간 음성인식",
        content: 
        `사용자의 말을 실시간으로 인식해
        텍스트로 변환 하는 실시간 응성인식 기능`
    },
    {
        id: 4,
        img : chat,
        title : "Ai 피드백",
        content: 
        `녹화한 영상을 AI가 분석한
        데이터를 바탕으로 발표력,자신감, 전달력에 대한총합평가 리포트와 개선방향을 제시하는 기능`
    },
]


export default cardItem