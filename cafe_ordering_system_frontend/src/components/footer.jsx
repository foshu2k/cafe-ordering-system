import styles from '../styles/footer.module.css'

import { useNavigate, NavLink, useLocation } from 'react-router-dom'

export default function Footer() {

    const location = useLocation();

    return (
        
            <div className={styles.container}>
                <NavLink
                    className={styles.button}
                    to = { location.pathname == "/service" ? "/" : "/service" }
                >
                    <p>{location.pathname == "/service" ? "Back" : "Use Service"}</p>
                </NavLink>
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
       
    )
}