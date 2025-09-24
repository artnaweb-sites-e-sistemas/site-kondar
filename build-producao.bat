@echo off
echo ========================================
echo    BUILD PRODUCAO KONDAR
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

REM Limpar build anterior
if exist "dist" (
    echo 🧹 Limpando build anterior...
    rmdir /s /q dist
)

echo 🔨 Construindo projeto para producao...
echo Aguarde, isso pode levar alguns minutos...
echo.

REM Executar build
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build concluido com sucesso!
    echo.
    echo 📁 Arquivos gerados em: dist/
    echo 📊 Tamanho do build:
    dir dist /s | find "arquivo(s)"
    echo.
    echo 🌐 Para testar o build:
    echo   1. Execute: preview-producao.bat
    echo   2. Ou use: iniciar-servidor-simples.bat
    echo.
) else (
    echo ❌ Erro no build!
    echo Verifique os erros acima.
)

echo ========================================
pause


