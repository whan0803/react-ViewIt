import styles from './Header.module.css';


import logo from '../assets/logo.png'

import { useNavigate } from "react-router-dom";




const Header = () => {
    
    const navigate = useNavigate();

    const goInterView = () => {
        navigate("/interview")
    }

    const goHome = () => {
        navigate("/");
    }

    return(
        <div className={styles.Header}>
            <img className={styles.logo} src={logo} alt="로고 이미지" />
            <ul className={styles.ul}>
                <li className={styles.li} onClick={goHome}>소개</li>
                <li className={styles.li} onClick={goInterView}>녹화</li>
                <li className={styles.li}>Mypage</li>
            </ul>
        </div>
    )
}

export default Header