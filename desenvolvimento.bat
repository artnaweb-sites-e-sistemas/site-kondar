@echo off
echo ========================================
echo    DESENVOLVIMENTO KONDAR
echo ========================================
echo.

REM Verificar se Node.js esta instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js nao encontrado!
    echo Execute primeiro: instalar-nodejs.bat
    pause
    exit /b 1
)

echo ✅ Node.js encontrado!
node --version
echo.

REM Verificar se dependencias estao instaladas
if not exist "node_modules" (
    echo 📦 Instalando dependencias...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Erro ao instalar dependencias!
        pause
        exit /b 1
    )
)

echo ✅ Dependencias verificadas!
echo.

REM Verificar se pasta src existe
if not exist "src" (
    echo ❌ Pasta src nao encontrada!
    echo Estrutura do projeto incorreta.
    pause
    exit /b 1
)

echo 🚀 Iniciando servidor de desenvolvimento...
echo.
echo 📍 URL: http://localhost:5173
echo 📁 Modo: Desenvolvimento (Hot Reload)
echo ⏹️  Pressione Ctrl+C para parar
echo.
echo ========================================
echo.

REM Iniciar servidor de desenvolvimento
npm run dev

pause


