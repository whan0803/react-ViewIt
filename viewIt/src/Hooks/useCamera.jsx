import { useEffect,useRef } from "react"

const useCamera = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false,
                })
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                    console.error("카메라 접근 실패", err);
            }
        }
        startCamera();

    }, [])

    return {
        videoRef
    }
}

export default useCamera