import styles from '../styles/home.module.css'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'

const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'tea', name: 'Tea & Matcha' },
  { id: 'pastries', name: 'Pastries' }
];

const PRODUCTS = [
  { id: 1, categoryId: 'coffee', name: 'Espresso', img: '/images/espresso.jpg' },
  { id: 2, categoryId: 'coffee', name: 'Latte', img: '/images/latte.jpg' },
  { id: 3, categoryId: 'tea', name: 'Matcha Latte', img: '/images/matcha.jpg' },
  { id: 4, categoryId: 'pastries', name: 'Croissant', img: '/images/croissant.jpg' },
  // ...add more products
];

export default function Home() {

    return(
   
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

                    <div className={styles.wrapper}>
                        {Array.from({ length: 8}).map((_,i) => (
                            <div className={styles.item}>box</div>
                        ))}
                    </div>
                
                </div>
                <div className={styles.products}>
                    {Array.from({ length: 10}).map((_,i) => (
                        <nav className={styles.button}>
                            <NavLink to="/product">
                                <div className={styles.image_container}>
                                    <img 
                                        src={`/path/to/product_image_${i}.jpg`} 
                                        alt={`Product ${i + 1}`} 
                                        className={styles.product_image} 
                                    />
                                </div>
                                
                            </NavLink>
                        </nav>
                        // 
                        
                    ))}
                </div>
            </div>

    )
}