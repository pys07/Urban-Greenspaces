import './About.css'

const About = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms for precise land use classification'
    },
    {
      icon: '🌍',
      title: 'Global Coverage',
      description: 'Analyze satellite imagery from anywhere in the world'
    },
    {
      icon: '⚡',
      title: 'Real-time Processing',
      description: 'Get classification results in seconds, not hours'
    },
    {
      icon: '📊',
      title: 'Detailed Analytics',
      description: 'Comprehensive reports with statistical breakdowns'
    },
    {
      icon: '🔮',
      title: 'Future Predictions',
      description: 'Forecast vegetation changes with deep learning models'
    },
    {
      icon: '🎯',
      title: 'High Accuracy',
      description: 'Up to 95% accuracy with Random Forest algorithm'
    }
  ]

  const algorithms = [
    {
      name: 'Logistic Regression (LR)',
      accuracy: '89.7%',
      speed: 'Fast',
      description: 'Linear classification model ideal for quick analysis of simple patterns',
      useCases: ['Urban planning', 'Quick surveys', 'Initial assessments']
    },
    {
      name: 'K-Nearest Neighbors (KNN)',
      accuracy: '87.3%',
      speed: 'Medium',
      description: 'Instance-based learning that classifies based on similarity to neighboring pixels',
      useCases: ['Agricultural monitoring', 'Water body detection', 'Forest mapping']
    },
    {
      name: 'Random Forest (RF)',
      accuracy: '94.2%',
      speed: 'Medium',
      description: 'Ensemble method combining multiple decision trees for superior accuracy',
      useCases: ['Detailed land surveys', 'Environmental monitoring', 'Scientific research']
    }
  ]

  const predictionAlgorithms = [
    {
      name: 'GRU (Gated Recurrent Unit)',
      accuracy: '91.5%',
      speed: 'Fast',
      description: 'Simplified recurrent neural network that efficiently captures temporal patterns in vegetation data',
      useCases: ['Short-term predictions', 'Real-time forecasting', 'Quick trend analysis']
    },
    {
      name: 'CA-LSTM (Convolutional Attention LSTM)',
      accuracy: '95.8%',
      speed: 'Medium',
      description: 'Advanced hybrid model combining convolutional layers with attention mechanisms for superior accuracy',
      useCases: ['Long-term forecasting', 'Climate change modeling', 'Research applications']
    },
    {
      name: 'ConvLSTM (Convolutional LSTM)',
      accuracy: '93.2%',
      speed: 'Medium',
      description: 'Spatiotemporal model that preserves spatial information while learning temporal dependencies',
      useCases: ['Seasonal predictions', 'Agricultural planning', 'Environmental monitoring']
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Green Spaces</h1>
          <p className="hero-subtitle">
            Revolutionizing vegetation analysis through artificial intelligence and satellite imagery
          </p>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element element-1">🌱</div>
            <div className="element element-2">🛰️</div>
            <div className="element element-3">🤖</div>
            <div className="element element-4">🌍</div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                Green Spaces addresses the critical challenge of manual land analysis by providing 
                an automated, efficient, and accurate solution for vegetation and land use classification. 
                Our platform empowers researchers, environmental scientists, urban planners, and 
                policymakers with the tools they need to make informed decisions about our planet's resources.
              </p>
              <div className="mission-stats">
                <div className="stat">
                  <div className="stat-number">10x</div>
                  <div className="stat-label">Faster Analysis</div>
                </div>
                <div className="stat">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Accuracy Rate</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Availability</div>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="problem-solution">
                <div className="problem">
                  <h3>The Problem</h3>
                  <ul>
                    <li>Manual analysis is time-consuming</li>
                    <li>Human error in classification</li>
                    <li>Limited scalability</li>
                    <li>Inconsistent results</li>
                  </ul>
                </div>
                <div className="arrow">→</div>
                <div className="solution">
                  <h3>Our Solution</h3>
                  <ul>
                    <li>Automated AI-powered analysis</li>
                    <li>Consistent, objective results</li>
                    <li>Process thousands of images</li>
                    <li>Real-time classification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Green Spaces?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Algorithms Section */}
      <section className="algorithms">
        <div className="container">
          <h2 className="section-title">Our Classification Algorithms</h2>
          <p className="section-subtitle">
            Choose from three powerful machine learning algorithms, each optimized for different use cases
          </p>
          <div className="algorithms-grid">
            {algorithms.map((algorithm, index) => (
              <div key={index} className="algorithm-card">
                <div className="algorithm-header">
                  <h3>{algorithm.name}</h3>
                  <div className="algorithm-metrics">
                    <span className="accuracy">Accuracy: {algorithm.accuracy}</span>
                    <span className="speed">Speed: {algorithm.speed}</span>
                  </div>
                </div>
                <p className="algorithm-description">{algorithm.description}</p>
                <div className="use-cases">
                  <h4>Best for:</h4>
                  <ul>
                    {algorithm.useCases.map((useCase, idx) => (
                      <li key={idx}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prediction Algorithms Section */}
      <section className="prediction-algorithms">
        <div className="container">
          <h2 className="section-title">Our Prediction Algorithms</h2>
          <p className="section-subtitle">
            Advanced deep learning models for forecasting future vegetation patterns and changes
          </p>
          <div className="algorithms-grid">
            {predictionAlgorithms.map((algorithm, index) => (
              <div key={index} className="algorithm-card prediction-card">
                <div className="algorithm-header">
                  <h3>{algorithm.name}</h3>
                  <div className="algorithm-metrics">
                    <span className="accuracy">Accuracy: {algorithm.accuracy}</span>
                    <span className="speed">Speed: {algorithm.speed}</span>
                  </div>
                </div>
                <p className="algorithm-description">{algorithm.description}</p>
                <div className="use-cases">
                  <h4>Best for:</h4>
                  <ul>
                    {algorithm.useCases.map((useCase, idx) => (
                      <li key={idx}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <div className="container">
          <div className="impact-content">
            <div className="impact-text">
              <h2>Making a Global Impact</h2>
              <p>
                Our technology contributes to several United Nations Sustainable Development Goals, 
                helping create a more sustainable future for our planet. By providing accurate, 
                real-time vegetation analysis, we enable:
              </p>
              <ul className="impact-list">
                <li>Better urban planning and sustainable city development</li>
                <li>More effective climate change monitoring and response</li>
                <li>Improved forest conservation and restoration efforts</li>
                <li>Enhanced agricultural productivity and food security</li>
                <li>Water resource management and protection</li>
                <li>Biodiversity conservation initiatives</li>
              </ul>
            </div>
            <div className="impact-visual">
              <div className="sdg-goals">
                <div className="sdg-item">
                  <span className="sdg-number">11</span>
                  <span className="sdg-text">Sustainable Cities</span>
                </div>
                <div className="sdg-item">
                  <span className="sdg-number">13</span>
                  <span className="sdg-text">Climate Action</span>
                </div>
                <div className="sdg-item">
                  <span className="sdg-number">15</span>
                  <span className="sdg-text">Life on Land</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology">
        <div className="container">
          <h2 className="section-title">Cutting-Edge Technology</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h3>🛰️ Satellite Imagery</h3>
              <p>High-resolution satellite data from multiple sources including Landsat, Sentinel, and commercial providers</p>
            </div>
            <div className="tech-item">
              <h3>🧠 Machine Learning</h3>
              <p>Advanced algorithms including Random Forest, Neural Networks, and Deep Learning models</p>
            </div>
            <div className="tech-item">
              <h3>☁️ Cloud Computing</h3>
              <p>Scalable cloud infrastructure for processing large datasets and delivering real-time results</p>
            </div>
            <div className="tech-item">
              <h3>🔬 Scientific Validation</h3>
              <p>Rigorous testing and validation against ground truth data to ensure accuracy and reliability</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About