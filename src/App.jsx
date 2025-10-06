import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Navigation from './pricing/Navigation'
import Section1 from './pricing/Section1'
import Section2 from './pricing/Section2'
import Footer from './pricing/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Section1/>
      <Section2/>
      <Footer/>
    </>
  )
}

export default App
