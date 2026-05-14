import {Routes, Route} from 'react-router-dom'

import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/home.jsx'
import Cart from '../pages/cart.jsx'
import Service from '../pages/service.jsx'

export default function AppRoutes() {
    return (
        <Routes>
            <Route element= {<MainLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/service" element={<Service />} />
            </Route>
        </Routes>
    )
}