// script.js
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('[data-target]')
  const sections = document.querySelectorAll('.panel, .hero')
  const heroBlob = document.querySelector('.hero-bg-blob')
  const logo = document.querySelector('.logo-large')
  const brand = document.querySelector('.brand')
  const navLinks = document.querySelectorAll('.main-nav a')
  const headerHeight = 72

  let isProgrammaticScroll = false

  /********** Helper: Set active nav **********/
  function setActiveNav(sectionId) {
    navLinks.forEach(a => a.classList.remove('active'))
    const activeLink = document.querySelector(
      `.main-nav a[href="#${sectionId}"]`
    )
    if (activeLink) activeLink.classList.add('active')
  }

  /********** Scroll-based active section **********/
  function updateActiveSectionOnScroll() {
    if (isProgrammaticScroll) return

    let currentSection = null

    sections.forEach(section => {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top - headerHeight
      const sectionBottom = rect.bottom - headerHeight

      if (
        sectionTop <= window.innerHeight * 0.4 &&
        sectionBottom > window.innerHeight * 0.4
      ) {
        currentSection = section
      }
    })

    if (currentSection?.id) {
      setActiveNav(currentSection.id)
    }
  }

  window.addEventListener('scroll', updateActiveSectionOnScroll)
  updateActiveSectionOnScroll()

  /********** Smooth scroll on nav click **********/
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()

      const targetId = link.getAttribute('data-target')
      const targetEl = document.getElementById(targetId)
      if (!targetEl) return

      isProgrammaticScroll = true
      setActiveNav(targetId)

      // Subtle hero animation
      if (heroBlob) {
        heroBlob.style.transform =
          'scale(0.9) translateY(-20px) rotate(4deg)'
      }

      const targetPosition =
        targetEl.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })

      // Restore state
      setTimeout(() => {
        if (heroBlob) heroBlob.style.transform = ''
        isProgrammaticScroll = false
      }, 700)
    })
  })

  /********** CTA buttons **********/
  document.querySelectorAll('.cta[data-target]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault()
      const target = btn.getAttribute('data-target')
      const el = document.getElementById(target)
      if (!el) return

      isProgrammaticScroll = true
      setActiveNav(target)

      window.scrollTo({
        top: el.offsetTop - headerHeight,
        behavior: 'smooth'
      })

      setTimeout(() => {
        isProgrammaticScroll = false
      }, 700)
    })
  })

  /********** Hero parallax **********/
  const hero = document.querySelector('.hero')
  hero &&
    hero.addEventListener('mousemove', e => {
      const rect = hero.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      if (heroBlob)
        heroBlob.style.transform = `translate(${x * 40}px, ${
          y * 30
        }px) rotate(${x * 8}deg)`

      if (logo)
        logo.style.transform = `translate(${x * 8}px, ${
          y * -6
        }px)`
    })

  hero &&
    hero.addEventListener('mouseleave', () => {
      if (heroBlob) heroBlob.style.transform = ''
      if (logo) logo.style.transform = ''
    })

  /********** Brand click → home **********/
  brand &&
    brand.addEventListener('click', e => {
      e.preventDefault()

      isProgrammaticScroll = true
      setActiveNav('home')

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })

      setTimeout(() => {
        isProgrammaticScroll = false
      }, 700)
    })

  /********** Mobile nav **********/
  const burger = document.querySelector('.burger');
  burger && burger.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    nav && nav.classList.toggle('active'); // toggle class
  });

})


