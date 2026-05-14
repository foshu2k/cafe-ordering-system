import styles from "../styles/mainlayout.module.css"

import { Outlet } from "react-router-dom"

import Footer from "../components/footer.jsx"

export default function MainLayout() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}