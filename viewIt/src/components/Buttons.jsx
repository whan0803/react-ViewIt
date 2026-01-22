import styles from  './Buttons.module.css'

const Buttons = () => {
    return(
        <div className ={styles.buttonContainer}>
            <button className={styles.button}>면집시작</button>
            <button className={styles.button}>다음질문</button>
            <button className={styles.button}>피드백받기</button>
        </div>
    )
}

export default Buttons