@echo off
echo ===================================
echo Green Spaces - Vegetation Analysis
echo ===================================
echo.

echo Starting Python Backend API...
echo.
start "Backend API" cmd /k "python backend_api.py"

echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak > nul

echo.
echo Starting React Frontend...
echo.
start "Frontend Dev Server" cmd /k "npm run dev"

echo.
echo ===================================
echo Both services are starting...
echo ===================================
echo.
echo Backend API: http://localhost:5000
echo Frontend:    http://localhost:5173
echo.
echo Press any key to close this window...
pause > nul