//css


//components
import Header from "../../components/Header"
import HomeContent1 from "./HomeComponent/HomeContent1"
import HomeContent2 from "./HomeComponent/HomeContent2"
import HomeContent3 from "./HomeComponent/HomeContent3"
import Footer from "../../components/Footer"


const Home = () => {
    return(
        <div>
            <Header />
            <HomeContent1 />
            <HomeContent2 />
            <HomeContent3 />
            <Footer />
        </div>
    )
}

export default Home