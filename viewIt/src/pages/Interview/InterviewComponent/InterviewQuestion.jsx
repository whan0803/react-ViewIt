import styles from './InterviewQuestion.module.css'

import robot from '../../../assets/robot.jpeg'

const InterviewQuestion = () => {
    return(
        <div className={styles.InterviewQuestion}>
                <img src={robot} alt="" className={styles.divImg} />

            <div className={styles.divP}>
                <p>안녕하세요 면접질문입니다 녹화버튼을 누르고 질문에 대답하는 영상을 ai가 분석하여 피드백을 해드립니다 피드백은 위에 피드백 창에서 들어가면 보실 수 있습니다. </p>
            </div>
            
        </div>
    )
}

export default InterviewQuestion