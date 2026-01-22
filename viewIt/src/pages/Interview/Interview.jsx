import Header from "../../components/Header"
import Footer from "../../components/Footer"
import InterviewQuestion from "./InterviewComponent/InterviewQuestion"
import InterViewCamera from "./InterviewComponent/InterViewCamera"
import Buttons from "../../components/Buttons"

const Interview = () => {
    return(
        <div style={{display: 'flex', flexDirection:'column',  height: '100vh'}}>
            <Header />
            <InterviewQuestion />
            <InterViewCamera />
            <Buttons />

        </div>
    )
}

export default Interview