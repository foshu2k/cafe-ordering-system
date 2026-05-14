import styles from '../styles/footer.module.css'

import { useNavigate, NavLink, useLocation } from 'react-router-dom'

export default function Footer() {

    const location = useLocation();

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
                    to = { location.pathname == "/cart" ? "/" : "/cart" }
                >
                    <p>{location.pathname == "/cart" ? "Home" : "Your Cart"}</p>
                </NavLink>
            </div>
        </>
    )
}