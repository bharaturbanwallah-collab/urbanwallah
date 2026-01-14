import "./vision.css"
import visionImage from "/assets/vision.png" // your illustration

const Vision = () => {
  return (
    <section className="vision-panel" id="vision">
      <div className="vision-overlay">
        <div className="vision-container">

          <div className="vision-content">
            <h2>Our Vision</h2>

            <ul>
              <li>
                Pioneering India’s first reinvented social media platform by early 2026,
                setting new standards for experience, privacy, and engagement.
              </li>
              <li>
                Expanding innovation across multiple digital industries by building a
                connected ecosystem of platforms and services.
              </li>
              <li>
                Establishing global benchmarks in product excellence, making UrbanWallah
                a symbol of innovation and quality worldwide.
              </li>
            </ul>

            <p>
              Our vision goes beyond building products. We are shaping a sustainable,
              future-ready ecosystem that empowers creators, entrepreneurs, and
              communities across India and beyond.
            </p>
          </div>

          <div className="vision-visual">
            <img src={visionImage} alt="UrbanWallah Vision" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Vision
