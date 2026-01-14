import './Works.css'

const Works = () => {
  return (
    <section className="works-panel alt" id="works">
      <div className="works-carousel-container">
        <div className="works-carousel-track">

          <div className="works-carousel-item bg-one">
            <div className="works-content">
              <h2>In-House Excellence</h2>
              <p>
                Strategy, design, and technology under one roof. Our integrated approach ensures seamless
                collaboration and faster time-to-market.
              </p>
            </div>
          </div>

          <div className="works-carousel-item bg-two">
            <div className="works-content">
              <h2>Selective Partnerships</h2>
              <p>
                Carefully chosen collaborators for scale and speed. We work with the best in the industry
                to bring innovative solutions to life.
              </p>
            </div>
          </div>

          <div className="works-carousel-item bg-three">
            <div className="works-content">
              <h2>Ecosystem-Led Innovation</h2>
              <p>
                Integrated platforms for long-term value, designed to grow with your business.
              </p>
            </div>
          </div>

          <div className="works-carousel-item bg-four">
            <div className="works-content">
              <h2>Empowering Startups</h2>
              <p>
                Mentorship, funding, and full-stack execution from idea to scale.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Works
