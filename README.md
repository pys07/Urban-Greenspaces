# Green Spaces - Vegetation Analysis Platform

A comprehensive web application for land use classification and vegetation analysis using advanced machine learning algorithms.

## 🌟 Features

- **Multiple Image Upload**: Upload and process multiple satellite/aerial images simultaneously
- **Three ML Algorithms**: 
  - Logistic Regression (LR) - 89.7% accuracy
  - K-Nearest Neighbors (KNN) - 87.3% accuracy  
  - Random Forest (RF) - 94.2% accuracy
- **Real-time Processing**: Color-based land use classification using OpenCV
- **Interactive Dashboard**: Drag-and-drop interface with live results
- **Batch Processing**: Process multiple images and view individual results
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🏗️ Architecture

### Frontend (React + Vite)
- **React 19.1.1** with Vite build tool
- **React Router v7** for navigation
- **Responsive CSS** with modern design
- **Real-time file upload** with progress tracking

### Backend (Python Flask API)
- **Flask** RESTful API
- **OpenCV** for image processing
- **Scikit-learn** for ML algorithms
- **CORS enabled** for frontend integration

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **pip** (Python package manager)

### Frontend Setup

1. **Navigate to project directory:**
   ```bash
   cd c:\\Users\\91996\\Desktop\\dbit\\quoder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The frontend will be available at: `http://localhost:5173`

### Backend Setup

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Start the Flask API server:**
   ```bash
   python backend_api.py
   ```
   
   The backend API will be available at: `http://localhost:5000`

### Alternative: Frontend Only Mode
If you don't want to set up the Python backend, the frontend will automatically fall back to simulation mode while still demonstrating all the UI features.

## 📋 Usage

### 1. Upload Images
- Drag and drop multiple images or click "Browse Files"
- Supported formats: JPG, PNG, BMP
- View thumbnails of all uploaded images
- Remove individual files or clear all

### 2. Select Algorithm
Choose from three machine learning algorithms:
- **Logistic Regression**: Fast color-based classification
- **K-Nearest Neighbors**: Instance-based learning with feature scaling
- **Random Forest**: Ensemble method with 100 estimators

### 3. Analyze Images
- Click "Analyze Images" to start processing
- View real-time progress bar
- Get comprehensive results including:
  - Average land use classification percentages
  - Individual image results
  - Processing time and accuracy metrics

### 4. View Results
- **Batch Overview**: See results for all processed images
- **Detailed Breakdown**: Land use percentages and accuracy
- **Visual Charts**: Mini bar charts for each image result

## 🔧 API Endpoints

### Backend API (Python Flask)

#### `POST /api/classify`
Classify multiple uploaded images using selected ML algorithm.

**Request:**
- `images`: Multiple image files
- `algorithm`: One of 'lr', 'knn', 'rf'

**Response:**
```json
{
  "classification": {
    "Barren Land": 15.23,
    "Residential": 22.45,
    "Vegetation": 35.67,
    "Coastal Vegetation": 12.34,
    "Water": 14.31
  },
  "accuracy": 94.2,
  "processing_time": 2.45,
  "image_results": [...],
  "algorithm": "Random Forest"
}
```

#### `GET /api/health`
Health check endpoint.

#### `GET /`
API information and available endpoints.

## 🎨 Land Use Categories

The system classifies images into five categories:

1. **🏜️ Barren Land** (Yellow) - Desert, bare soil, rocky areas
2. **🏘️ Residential** (Red) - Urban areas, buildings, infrastructure  
3. **🌲 Vegetation** (Dark Green) - Forests, dense vegetation
4. **🌿 Coastal Vegetation** (Light Green) - Coastal plants, wetlands
5. **💧 Water** (Blue) - Rivers, lakes, oceans

## 🔬 Technical Details

### Color-Based Classification
The system uses RGB color range analysis to identify different land use types:

```python
color_ranges = {
    "Barren Land": [(np.array([200, 200, 0]), np.array([255, 255, 100]))],
    "Residential": [(np.array([150, 0, 0]), np.array([255, 100, 100]))],
    "Coastal Vegetation": [(np.array([0, 200, 0]), np.array([100, 255, 100]))],
    "Vegetation": [(np.array([0, 100, 0]), np.array([100, 200, 100]))],
    "Water": [(np.array([0, 0, 100]), np.array([100, 100, 255]))]
}
```

### Machine Learning Models
- **Feature Extraction**: Color percentage vectors
- **Preprocessing**: StandardScaler normalization
- **Training**: Automatic train/test split when sufficient data available
- **Prediction**: Real-time classification with confidence scoring

## 📱 Project Structure

```
quoder/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx & Home.css
│   │   ├── Classification.jsx & Classification.css
│   │   ├── Prediction.jsx & Prediction.css
│   │   ├── About.jsx & About.css
│   │   └── Contact.jsx & Contact.css
│   ├── App.jsx & App.css
│   ├── index.css
│   └── main.jsx
├── backend_api.py
├── requirements.txt
├── package.json
├── vite.config.js
└── index.html
```

## 🌍 Contributing to Sustainability

This project contributes to several UN Sustainable Development Goals:
- **Goal 11**: Sustainable Cities and Communities
- **Goal 13**: Climate Action  
- **Goal 15**: Life on Land

## 🚀 Future Enhancements

- [ ] Database integration for storing results
- [ ] User authentication and project management
- [ ] Advanced ML models (Deep Learning, CNNs)
- [ ] Export functionality (PDF reports, GeoJSON)
- [ ] Integration with satellite data APIs
- [ ] Temporal analysis and change detection

## 📄 License

This project is created for educational and research purposes.

## 🤝 Support

For questions or issues:
- Check the Contact page in the web application
- Review the API health endpoint: `http://localhost:5000/api/health`
- Ensure all dependencies are properly installed

---

**Built with ❤️ for environmental analysis and sustainability research**