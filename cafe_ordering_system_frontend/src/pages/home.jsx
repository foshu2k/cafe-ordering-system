import styles from '../styles/home.module.css'

export default function Home() {

    return(
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>Welcome to Lumière Cafe!</h3>
                </div>
                <div className={styles.customize_order}>
                    <h3>How would you like your coffee?</h3>
                    <div className={styles.images}>
                        <div className={styles.big_image} />
                        <div className={styles.small_image} />
                    </div>

                </div>
                <div className={styles.categories}>
                    <p>Categories</p>

                    <div className={styles.choices}>
                        {Array.from({ length: 5}).map((_,i) => (
                            <div />
                        ))}
                    </div>

                </div>
                <div className={styles.products}>
                    {Array.from({ length: 10}).map((_,i) => (
                        <div />
                    ))}
                </div>
            </div>
        </>
    )
}