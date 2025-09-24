@echo off
echo ========================================
echo    PREVIEW PRODUCAO KONDAR
echo ========================================
echo.

REM Verificar se build existe
if not exist "dist" (
    echo ❌ Build nao encontrado!
    echo Execute primeiro: build-producao.bat
    pause
    exit /b 1
)

echo ✅ Build encontrado!
echo.

REM Verificar se Node.js esta instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js nao encontrado!
    echo Execute primeiro: instalar-nodejs.bat
    pause
    exit /b 1
)

echo 🚀 Iniciando preview da producao...
echo.
echo 📍 URL: http://localhost:4173
echo 📁 Modo: Preview Producao
echo ⏹️  Pressione Ctrl+C para parar
echo.
echo ========================================
echo.

REM Iniciar preview
npm run preview

pause


