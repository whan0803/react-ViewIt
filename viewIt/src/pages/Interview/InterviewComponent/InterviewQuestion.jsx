import { useState } from 'react'

import useQuestions from '../../../Hooks/useQuestions'

import styles from './InterviewQuestion.module.css'

import robot from '../../../assets/robot.jpeg'

const InterviewQuestion = ({ started, currentQuestion }) => {
  return (
    <div className={styles.InterviewQuestion}>
      <img src={robot} alt="" className={styles.divImg} />

      <div className={styles.divP}>
        {!started ? (
          <p>
            안녕하세요 면접질문입니다 녹화버튼을 누르고 질문에 대답하는 영상을
            ai가 분석하여 피드백을 해드립니다
          </p>
        ) : (
          <p>{currentQuestion}</p>
        )}
      </div>
    </div>
  );
};

export default InterviewQuestion