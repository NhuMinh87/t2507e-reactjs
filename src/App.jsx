import './App.css'
import Button from './components/Button'
import NavMenu from './components/NavMenu'
import { Route, Routes } from 'react-router-dom'
import Category from './pages/Category'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

function App() {
  
  return (
    <>
      <NavMenu/>
      <main>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/category' Component={Category}/>
            <Route path='/cart' Component={Cart}/>
            <Route path='/login' Component={Login}/>
            <Route path='/register' Component={Register}/>
            <Route path='/aboutus' Component={AboutUs}/>
            <Route path='/contactus' Component={ContactUs}/>
        </Routes>
      </main>
    </>
  )
}

export default App
