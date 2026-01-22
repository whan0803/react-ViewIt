import styles from './HomeContent3.module.css'


const HomeContent3 = () => {
    return(
        <div className={styles.HomeContent3} >
            <div className={styles.textBox}>
                <p className={styles.title}>Usage</p>
                <div className={styles.divider}></div>
                <p className={styles.content}>피드백 제공을 위해 카메라와 마이크 사용을 꼭 허용해주세요</p>
                <div className={styles.divider}></div>
                <ul className={styles.ul}>
                    <li className={styles.LiTitle}>면접 시작하기</li>
                    <li className={styles.LiContent}>" 면접 시작 " 버튼을 클릭시 면접질문이 순서대로 화면에 표시됩니다.</li>
                    <li className={styles.LiContent}>질문을 확인한 수 답변을 말하면 음성이 자동으로 인식되어 실시간으로 기록됩니다.</li>
                </ul>
                <div className={styles.divider}></div>
                <ul className={styles.ul}>
                    <li className={styles.LiTitle}>표정 및 음성 분석</li>
                    <li className={styles.LiContent}>답변하는 동안 얼굴 표정과 음성이 실시간으로 분석됩니다.</li>
                    <li className={styles.LiContent}>자연스러운 표정과 말투로 응답하세요.</li>
                </ul>
                <div className={styles.divider}></div>
                <ul className={styles.ul}>
                    <li className={styles.LiTitle}>피드백 확인</li>
                    <li className={styles.LiContent}>면접이 종료되면 표정 변화와 음성 분석 데이터를 기반으로 한 종합 피드백이 제공됩니다.</li>
                    <li className={styles.LiContent}>이를 통해 자신의 발표 습관 점검, 개선할 부분을 쉽게 파악할 수 있습니다.</li>
                </ul>
            </div>
        </div>
    )
}

export default HomeContent3