import styles from '../styles/product.module.css'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'

export default function Product() {
    return (
        <>
            <NavLink to="/">
                Back
            </NavLink>
            <h1>Product</h1>
        </>
        
    )
}