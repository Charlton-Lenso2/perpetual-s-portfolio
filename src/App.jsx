import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import { AnimatePresence } from 'motion/react'
import Lenis from 'lenis'

import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis()
    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <Sidebar />
      <div className="pt-16 md:pl-64 md:pt-0">
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}