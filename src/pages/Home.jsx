import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const g20Goals = [
    {
      id: 1,
      title: "Sustainable Cities",
      description: "Make cities and human settlements inclusive, safe, resilient and sustainable",
      icon: "🏙️"
    },
    {
      id: 2,
      title: "Climate Action",
      description: "Take urgent action to combat climate change and its impacts",
      icon: "🌍"
    },
    {
      id: 3,
      title: "Life on Land",
      description: "Protect, restore and promote sustainable use of terrestrial ecosystems",
      icon: "🌲"
    },
    {
      id: 4,
      title: "Clean Water",
      description: "Ensure availability and sustainable management of water and sanitation",
      icon: "💧"
    },
    {
      id: 5,
      title: "Responsible Consumption",
      description: "Ensure sustainable consumption and production patterns",
      icon: "♻️"
    },
    {
      id: 6,
      title: "Zero Hunger",
      description: "End hunger, achieve food security and promote sustainable agriculture",
      icon: "🌾"
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Green Spaces: Analyzing Our World's Vegetation
          </h1>
          <p className="hero-subtitle">
            Advanced land use classification and vegetation analysis using cutting-edge machine learning algorithms
          </p>
          <Link to="/classification" className="cta-button">
            Start Classifying Now
            <span className="cta-arrow">→</span>
          </Link>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">95%</div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat">
            <div className="stat-number">3</div>
            <div className="stat-label">Algorithms</div>
          </div>
          <div className="stat">
            <div className="stat-number">∞</div>
            <div className="stat-label">Possibilities</div>
          </div>
        </div>
      </section>

      {/* G20 Goals Section */}
      <section className="g20-goals">
        <div className="container">
          <h2 className="section-title">Supporting Sustainable Development Goals</h2>
          <p className="section-subtitle">
            Our vegetation analysis contributes to achieving key G20 Sustainable Development Goals
          </p>
          <div className="goals-grid">
            {g20Goals.map((goal) => (
              <div key={goal.id} className="goal-card">
                <div className="goal-icon">{goal.icon}</div>
                <h3 className="goal-title">{goal.title}</h3>
                <p className="goal-description">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Upload Image</h3>
                <p>Upload your satellite or aerial imagery for analysis</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Select Algorithm</h3>
                <p>Choose from LR, KNN, or Random Forest algorithms</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Get Classification</h3>
                <p>Receive detailed land use classification results</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home