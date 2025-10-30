import { useState } from 'react'
import './Prediction.css'

const Prediction = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('')
  const [appliedAlgorithm, setAppliedAlgorithm] = useState('')
  const [modalImage, setModalImage] = useState(null)
  const [modalTitle, setModalTitle] = useState('')

  const algorithms = [
    { value: 'GRU', label: 'GRU (Gated Recurrent Unit)' },
    { value: 'CALSTM', label: 'CA-LSTM (Convolutional Attention LSTM)' },
    { value: 'convlstm', label: 'ConvLSTM (Convolutional LSTM)' }
  ]

  const handleApply = () => {
    if (selectedAlgorithm) {
      setAppliedAlgorithm(selectedAlgorithm)
    }
  }

  const getResultImage = () => {
    if (!appliedAlgorithm) return null
    return `/images/${appliedAlgorithm}.bmp`
  }

  const openModal = (imageSrc, title) => {
    setModalImage(imageSrc)
    setModalTitle(title)
  }

  const closeModal = () => {
    setModalImage(null)
    setModalTitle('')
  }

  const downloadPredictionResult = () => {
    if (!appliedAlgorithm) return
    
    const link = document.createElement('a')
    link.href = getResultImage()
    link.download = `${appliedAlgorithm}_prediction_result.bmp`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadAllImages = () => {
    const images = [
      { src: '/images/1990.bmp', name: '1990_vegetation_map.bmp' },
      { src: '/images/2000.bmp', name: '2000_vegetation_map.bmp' },
      { src: '/images/2010.bmp', name: '2010_vegetation_map.bmp' },
      { src: '/images/2020.bmp', name: '2020_vegetation_map.bmp' }
    ]
    
    if (appliedAlgorithm) {
      images.push({ src: getResultImage(), name: `${appliedAlgorithm}_prediction_result.bmp` })
    }
    
    images.forEach((image, index) => {
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = image.src
        link.download = image.name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, index * 500) // Stagger downloads
    })
  }

  return (
    <div className="prediction">
      <div className="prediction-header">
        <h1>Vegetation Prediction Models</h1>
        <p>Explore future vegetation patterns using advanced deep learning models</p>
        
        {/* Algorithm Selection */}
        <div className="algorithm-selection">
          <div className="dropdown-container">
            <label htmlFor="algorithm-select">Select Prediction Algorithm:</label>
            <select 
              id="algorithm-select"
              value={selectedAlgorithm} 
              onChange={(e) => setSelectedAlgorithm(e.target.value)}
              className="algorithm-dropdown"
            >
              <option value="">Choose an algorithm...</option>
              {algorithms.map((algo) => (
                <option key={algo.value} value={algo.value}>
                  {algo.label}
                </option>
              ))}
            </select>
            <button 
              onClick={handleApply}
              disabled={!selectedAlgorithm}
              className="apply-button"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      <div className="prediction-content">
        {/* Historical Images Grid */}
        <div className="images-section">
          <h2 className="animate-fade-in">Historical Vegetation Data</h2>
          <div className="historical-images">
            <div className="image-item animate-slide-in-1" onClick={() => openModal('/images/1990.bmp', '1990 Vegetation Map')}>
              <img src="/images/1990.bmp" alt="1990 Vegetation Map" />
              <h3>1990</h3>
              <div className="image-overlay">
                <span className="view-text">Click to view full size</span>
              </div>
            </div>
            <div className="image-item animate-slide-in-2" onClick={() => openModal('/images/2000.bmp', '2000 Vegetation Map')}>
              <img src="/images/2000.bmp" alt="2000 Vegetation Map" />
              <h3>2000</h3>
              <div className="image-overlay">
                <span className="view-text">Click to view full size</span>
              </div>
            </div>
            <div className="image-item animate-slide-in-3" onClick={() => openModal('/images/2010.bmp', '2010 Vegetation Map')}>
              <img src="/images/2010.bmp" alt="2010 Vegetation Map" />
              <h3>2010</h3>
              <div className="image-overlay">
                <span className="view-text">Click to view full size</span>
              </div>
            </div>
            <div className="image-item animate-slide-in-4" onClick={() => openModal('/images/2020.bmp', '2020 Vegetation Map')}>
              <img src="/images/2020.bmp" alt="2020 Vegetation Map" />
              <h3>2020</h3>
              <div className="image-overlay">
                <span className="view-text">Click to view full size</span>
              </div>
            </div>
          </div>

          {/* Result Image */}
          {appliedAlgorithm && (
            <div className="result-section animate-slide-up">
              <h2 className="animate-fade-in">Prediction Result - {algorithms.find(a => a.value === appliedAlgorithm)?.label}</h2>
              <div className="result-image animate-zoom-in" onClick={() => openModal(getResultImage(), `${appliedAlgorithm} Prediction Result`)}>
                <img src={getResultImage()} alt={`${appliedAlgorithm} Prediction Result`} />
                <h3>Predicted Future Vegetation</h3>
                <div className="image-overlay">
                  <span className="view-text">Click to view full size</span>
                </div>
              </div>
              
              {/* Download Section */}
              <div className="download-section animate-fade-in-delay">
                <h3>Download Options</h3>
                <div className="download-buttons">
                  <button 
                    className="download-btn primary"
                    onClick={downloadPredictionResult}
                  >
                    📥 Download Prediction Result
                  </button>
                  <button 
                    className="download-btn secondary"
                    onClick={downloadAllImages}
                  >
                    📦 Download All Images
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Image Modal */}
        {modalImage && (
          <div className="image-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{modalTitle}</h3>
                <button className="close-button" onClick={closeModal}>&times;</button>
              </div>
              <div className="modal-image-container">
                <img src={modalImage} alt={modalTitle} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Prediction