# Quick Setup Guide - Green Spaces Project

## 🚀 **For Current Development (Your Setup)**

### **Start the Project:**
```bash
# Option 1: Automatic (Recommended)
start.bat

# Option 2: Manual
# Terminal 1:
python backend_api.py

# Terminal 2: 
npm run dev
```

### **Access URLs:**
- **Frontend**: http://localhost:5175 (current port)
- **Backend API**: http://localhost:5000

### **Test Everything Works:**
1. Open browser → Classification page
2. Upload 2-3 test images (JPG/PNG/BMP)
3. Select any algorithm (LR/KNN/RF)
4. Click "Analyze Images"
5. Verify table shows results

---

## 📦 **For New Users (Sharing Your Project)**

### **Step-by-Step Setup:**

#### **1. Prerequisites (First Time Only):**
- Install Node.js: https://nodejs.org/
- Install Python: https://python.org/

#### **2. Project Setup:**
```bash
# Navigate to project folder
cd path/to/green-spaces-project

# Install dependencies
npm install
pip install -r requirements.txt

# Start application
start.bat
```

#### **3. Verification:**
- Frontend opens automatically at http://localhost:5173
- Backend runs at http://localhost:5000
- Test by uploading images in Classification page

---

## 📋 **What to Include When Sharing:**

### **Essential Files:**
```
green-spaces/
├── src/                 # All React components
├── backend_api.py       # Python ML server
├── requirements.txt     # Python dependencies
├── package.json         # Node.js dependencies  
├── start.bat           # Easy startup script
├── vite.config.js      # Build configuration
├── index.html          # Entry point
└── PROJECT_DOCUMENTATION.md # Full guide
```

### **Instructions for Recipients:**
1. "Install Node.js and Python first"
2. "Run 'npm install' and 'pip install -r requirements.txt'"  
3. "Double-click start.bat or run the commands manually"
4. "Open browser to http://localhost:5173"

---

## 🔧 **Common Issues & Quick Fixes:**

| Problem | Solution |
|---------|----------|
| Port already in use | `npx kill-port 5000 5173` |
| Module not found | `npm install && pip install -r requirements.txt` |
| Backend not starting | Check Python version: `python --version` |
| Images not uploading | Use JPG/PNG/BMP files under 10MB |

---

**Current Status:** ✅ Project is running on port 5175
**Backend:** ✅ Ready at http://localhost:5000  
**Documentation:** ✅ Complete in PROJECT_DOCUMENTATION.md