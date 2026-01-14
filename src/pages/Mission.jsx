import { useState, useEffect } from 'react'
import './Mission.css'

const slides = [
  {
    title: 'Social Media Platforms',
    desc: 'A truly Indian, reinvented social experience that connects communities meaningfully.'
  },
  {
    title: 'E-commerce & Quick Commerce',
    desc: 'Fast, scalable, seamless shopping experiences built for the future.'
  },
  {
    title: 'Mobile Payments & Fintech',
    desc: 'Secure, simple, future-ready transactions empowering businesses and people.'
  },
  {
    title: 'Property Search Platforms',
    desc: 'Intelligent, transparent discovery to find your perfect space effortlessly.'
  }
]

const Mission = () => {
  const [index, setIndex] = useState(0)

  // Auto slide every 40 seconds (stops at last slide)
  useEffect(() => {
    if (index === slides.length - 1) return

    const timer = setInterval(() => {
      setIndex(i => i + 1)
    }, 40000)

    return () => clearInterval(timer)
  }, [index])

  const nextSlide = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1)
    }
  }

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <section className="mission-page" id="mission">

      {/* ===== TOP 60% CAROUSEL ===== */}
      <div className="mission-carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div className="carousel-slide" key={i}>
              <div className="carousel-box">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PREVIOUS */}
        <button
          className={`carousel-arrow prev ${index === 0 ? 'disabled' : ''}`}
          onClick={prevSlide}
          disabled={index === 0}
        >
          ←
        </button>

        {/* NEXT */}
        <button
          className={`carousel-arrow next ${index === slides.length - 1 ? 'disabled' : ''}`}
          onClick={nextSlide}
          disabled={index === slides.length - 1}
        >
          →
        </button>
      </div>

      {/* ===== BOTTOM 40% ===== */}
      <div className="mission-bottom">
        <div className="mission-text">
          <h4>Powered by Advanced AI</h4>
          <p>
            We build smarter, adaptive digital platforms that learn,
            evolve, and deliver deeply personalized experiences.
          </p>
        </div>

        <div className="mission-image-wrap">
          <img
            src="/assets/mission.png"
            alt="AI Innovation"
            className="mission-image"
          />
        </div>
      </div>

    </section>
  )
}

export default Mission
