import Home from './pages/home.jsx'
import Footer from './components/footer.jsx'

import { BrowserRouter } from "react-router-dom" 

import AppRoutes from './routes/AppRoutes.jsx'

export default function App() {

  return (
    <BrowserRouter>
        <AppRoutes />        
    </BrowserRouter>
  )
}
