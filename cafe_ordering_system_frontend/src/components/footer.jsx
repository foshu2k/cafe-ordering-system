import styles from '../styles/footer.module.css'

import { useNavigate, NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <p>Use Service</p>
                <div className={styles.mic_container}>
                    <div className={styles.mic_inner_container}>

                    </div>

                </div>
                <NavLink
                    className={styles.button}
                    to = "/cart"
                >
                    <p>Your Cart</p>
                </NavLink>
            </div>
        </>
    )
}