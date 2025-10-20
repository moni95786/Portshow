import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Proflie/Navbar'
import Home from './Proflie/Home'
import AboutMe from './Proflie/AboutMe'
import Perfomance from './Proflie/Perfomance'
import Performance from './Proflie/Performance'
import Ativity from './Proflie/Ativity'
import Contact from './Proflie/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body className='scroll-smooth'>
      

      <Navbar />
      <Home />
      <AboutMe />
      <Perfomance />
      <Performance />
      <Ativity />
      <Contact />
      
      </body>
    </>    
  )
}

export default App
