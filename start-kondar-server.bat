@echo off
echo Starting Kondar website server...
echo.
echo Choose your preferred method:
echo 1. Vite Preview Server (Recommended)
echo 2. Python HTTP Server
echo 3. PowerShell Server
echo.
set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
    echo Starting Vite Preview Server...
    npx vite preview --port 8080
) else if "%choice%"=="2" (
    echo Starting Python HTTP Server...
    python -m http.server 8080 --directory dist
) else if "%choice%"=="3" (
    echo Starting PowerShell Server...
    powershell -ExecutionPolicy Bypass -File "start-server.ps1"
) else (
    echo Invalid choice. Starting Vite Preview Server by default...
    npx vite preview --port 8080
)

pause
