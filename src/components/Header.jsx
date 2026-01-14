import { useState } from 'react'

const Header = ({ activeSection, onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()

    // Close mobile menu after click
    setMenuOpen(false)

    if (onNavClick) {
      onNavClick(sectionId)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 72
        const targetPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const handleBrandClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)

    if (onNavClick) {
      onNavClick('home')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isActive = (section) => activeSection === section

  return (
    <header className="site-header">
      <div className="container nav-wrap">

        {/* BRAND */}
        <a href="#home" className="brand" onClick={handleBrandClick}>
          <img
            src="/assets/brand.png"
            alt="UrbanWallah Logo"
            className="logo"
          />
          <span className="brand-title">UrbanWallah</span>
        </a>

        {/* NAV */}
        <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            {[
              ['home', 'Home'],
              ['about', 'About'],
              ['mission', 'Mission'],
              ['vision', 'Vision'],
              ['works', 'Works'],
              ['projects', 'Projects'],
              ['contact', 'Contact Us']
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={isActive(id) ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* BURGER */}
        <button
          className="burger"
          aria-label="menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          ☰
        </button>

      </div>
    </header>
  )
}

export default Header