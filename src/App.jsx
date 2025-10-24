import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BackgroundAurora from './components/BackgroundAurora'
import Header from './components/Header'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('theme') === 'dark' ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <Router>
      {loading && <Preloader />}
      <Cursor />

      {/* Background Aurora - tetap di belakang semua */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <BackgroundAurora isDark={isDark} />
      </div>

      {/* Header di atas konten */}
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="header-spacer" />

      {/* Konten utama */}
      <main className="relative z-10 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      {/* Footer selalu tampil di bawah */}
      <Footer />
    </Router>
  )
}
