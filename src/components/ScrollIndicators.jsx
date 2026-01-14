import { useState, useEffect } from 'react'
import './ScrollIndicators.css'

const ScrollIndicators = () => {
  const [showDownArrow, setShowDownArrow] = useState(true)
  const [showUpArrow, setShowUpArrow] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const headerHeight = 72
      const contactSection = document.getElementById('contact')
      
      // Check if we're in the contact section (last section)
      if (contactSection) {
        const contactTop = contactSection.offsetTop - headerHeight
        const contactBottom = contactTop + contactSection.offsetHeight
        const isInContact = scrollY + (windowHeight * 0.4) >= contactTop && 
                           scrollY + (windowHeight * 0.4) < contactBottom
        
        // Show up arrow when in contact section, down arrow otherwise
        if (isInContact) {
          setShowDownArrow(false)
          setShowUpArrow(true)
          setIsAtBottom(true)
        } else {
          setShowDownArrow(true)
          setShowUpArrow(false)
          setIsAtBottom(false)
        }
      } else {
        // Fallback to bottom check
        const documentHeight = document.documentElement.scrollHeight
        const atBottom = scrollY + windowHeight >= documentHeight - 50
        if (atBottom) {
          setShowDownArrow(false)
          setShowUpArrow(true)
        } else {
          setShowDownArrow(true)
          setShowUpArrow(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollDown = () => {
    const sections = ['home', 'about', 'mission', 'vision', 'works', 'projects', 'contact']
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const headerHeight = 72

    // Find next section to scroll to
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i])
      if (section) {
        const sectionTop = section.offsetTop - headerHeight
        if (sectionTop > scrollY + 100) {
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
          })
          break
        }
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {showDownArrow && (
        <button 
          className="scroll-down-indicator" 
          onClick={scrollDown}
          aria-label="Scroll down"
        >
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {showUpArrow && (
        <button 
          className="scroll-up-indicator" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="28" height="36" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 19L12 14L17 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 26L12 21L17 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </>
  )
}

export default ScrollIndicators

