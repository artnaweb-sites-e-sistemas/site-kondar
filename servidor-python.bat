@echo off
echo ========================================
echo    SERVIDOR PYTHON KONDAR
echo ========================================
echo.

REM Verificar se Python esta instalado
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python nao encontrado!
    echo Execute primeiro: instalar-python.bat
    pause
    exit /b 1
)

echo ✅ Python encontrado!
python --version
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

echo 🚀 Iniciando servidor Python...
echo.

REM Executar servidor Python
python servidor-python.py

pause


