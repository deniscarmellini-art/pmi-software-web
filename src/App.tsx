import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { ProductHeader } from './components/ProductHeader'
import { SisLog } from './components/SisLog'
import { SisMaint } from './components/SisMaint'
import { SisStore } from './components/SisStore'
import { Home } from './Home'

function SisStorePage() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="product-page">
      <ProductHeader />
      <SisStore />
      <Footer />
    </div>
  )
}

function SisLogPage() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="product-page">
      <ProductHeader />
      <SisLog />
      <Footer />
    </div>
  )
}

function SisMaintPage() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="product-page">
      <ProductHeader />
      <SisMaint />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sisstore" element={<SisStorePage />} />
        <Route path="/sislog" element={<SisLogPage />} />
        <Route path="/sismaint" element={<SisMaintPage />} />
      </Routes>
    </BrowserRouter>
  )
}
