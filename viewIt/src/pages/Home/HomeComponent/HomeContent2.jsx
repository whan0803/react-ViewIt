import styles from './HomeContent2.module.css'

import HomeContent2Item from "../../../components/HomeContent2Item"


const HomeContent2 = () => {
    return(
        <div className={styles.HomeContent2}>
            <h1 className={styles.h1}>Main feature</h1>

            <div className={styles.HomeContent2Wrapper}>
                <HomeContent2Item />
            </div>
        </div>
    )
}

export default HomeContent2