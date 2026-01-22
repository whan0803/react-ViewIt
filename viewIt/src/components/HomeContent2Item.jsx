import styles from './HomeContent2Item.module.css'




import cardItem from '../util/card_util.js';

const HomeContent2Item = () => {
    return(
        <div className={styles.container} >
            {cardItem.map((item) => (
                <div className={styles.HomeContent2Item} key={item.id}>
                    <img className={styles.img} src={item.img} alt="content2Logo" />
                    <ul className={styles.card_ul}>
                        <li className={styles.title}>{item.title}</li>
                        <li calssName={styles.content}>{item.content}</li>
                    </ul>
                </div>
            ))}

        </div>
    )
}

export default HomeContent2Item