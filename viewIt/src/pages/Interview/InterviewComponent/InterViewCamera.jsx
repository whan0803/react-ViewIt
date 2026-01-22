import styles from './InterViewCamera.module.css'
import { useEffect, useRef } from 'react'

import useCamera from '../../../Hooks/useCamera';
import useFaceDetection from '../../../Hooks/useFaceDetection';


const InterViewCamera = () => {
    const { videoRef } = useCamera();
    const canvasRef = useRef(null);

    useFaceDetection(videoRef, canvasRef);


    return (
      <div className={styles.InterViewCamera}>
        <div className={styles.CameraBox}>
          <video ref={videoRef} autoPlay playsInline muted></video>
          <canvas
            ref={canvasRef}
          ></canvas>
        </div>
      </div>
    );
}

export default InterViewCamera