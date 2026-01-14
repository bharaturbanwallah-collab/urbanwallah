import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PageTurn from './components/PageTurn'

import Home from './pages/Home'
import About from './pages/About'
import Mission from './pages/Mission'
import Vision from './pages/Vision'
import Works from './pages/Works'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const PAGES = {
  home: <Home />,
  about: <About />,
  mission: <Mission />,
  vision: <Vision />,
  works: <Works />,
  projects: <Projects />,
  contact: <Contact />
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [nextPage, setNextPage] = useState(null)
  const [isTurning, setIsTurning] = useState(false)

  const handleNavClick = (page) => {
    if (page === currentPage || isTurning) return

    setNextPage(page)
    setIsTurning(true)
  }

  const handleTurnComplete = () => {
    setCurrentPage(nextPage)
    setNextPage(null)
    setIsTurning(false)
  }

  return (
    <>
      <Header
        activeSection={currentPage}
        onNavClick={handleNavClick}
      />

      {/* NORMAL PAGE */}
      {!isTurning && (
        <main>
          {PAGES[currentPage]}
        </main>
      )}

      {/* PAGE TURN */}
      {isTurning && (
        <PageTurn
          from={PAGES[currentPage]}
          to={PAGES[nextPage]}
          isActive={isTurning}
          onComplete={handleTurnComplete}
        />
      )}

      <Footer />
    </>
  )
}

export default App
