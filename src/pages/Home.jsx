import { useEffect, useRef } from 'react'

const Home = ({ onNavClick }) => {
  const heroBlobRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    const heroBlob = heroBlobRef.current
    const logo = logoRef.current

    const handleMouseMove = (e) => {
      if (!hero || !heroBlob || !logo) return

      const rect = hero.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      heroBlob.style.transform = `translate(${x * 40}px, ${y * 30}px) rotate(${x * 8}deg)`
      logo.style.transform = `translate(${x * 8}px, ${y * -6}px)`
    }

    const handleMouseLeave = () => {
      if (heroBlob) heroBlob.style.transform = ''
      if (logo) logo.style.transform = ''
    }

    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove)
      hero.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove)
        hero.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // ✅ IMPORTANT: route CTA through App navigation
  const handleCTAClick = (e) => {
    e.preventDefault()
    onNavClick?.('projects')
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg-blob" ref={heroBlobRef}></div>

      <div className="container hero-inner">
        <div className="hero-left">
          <div className="logo-wrap">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="logo-large"
              ref={logoRef}
            />

            <h1 className="hero-title">
              A Reinvented Startup Ecosystem
            </h1>

            <p className="hero-sub">
              Believe in the transformative power of ideas
            </p>

            <div className="hero-cta">
              <button className="cta" onClick={handleCTAClick}>
                Build With Us
              </button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card" id="heroCard">
            <h3>Welcome to UrbanWallah</h3>
            <p>
             Our ecosystem is where thoughts evolve into concepts, and concepts are nurtured into fully realized products. 
             We are redefining the way startups innovate, disrupt, and thrive in the modern digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
