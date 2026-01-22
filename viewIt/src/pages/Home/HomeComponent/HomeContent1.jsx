import styles from './HomeContent1.module.css'

import { useNavigate } from "react-router-dom";
const HomeContent1 = () => {
    const navigation = useNavigate();

    const goInterview = () => {
        navigation('./interview')
    }
    return(
        <div className={styles.HomeContent1}>
            <ul className={styles.ul}>
                <li className={styles.li}>중요한 면접, 발표준비는</li>
                <li className={styles.li}>View It</li>
                <li className={styles.li}>표정인식, 자동 면접문제STT기능으로 면접 발표를 연습할 수 있습니다</li>
                <li><button className={styles.button} onClick={goInterview}>GetStart</button></li>
            </ul>
        </div>
    )
}

export default HomeContent1