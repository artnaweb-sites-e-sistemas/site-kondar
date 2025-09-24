@echo off
echo ========================================
echo    INSTALACAO NODE.JS - KONDAR
echo ========================================
echo.

REM Verificar se Node.js ja esta instalado
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js ja esta instalado!
    node --version
    echo.
    echo Deseja reinstalar? (s/n)
    set /p choice=
    if /i "%choice%" neq "s" (
        echo Instalacao cancelada.
        pause
        exit /b 0
    )
)

echo 📥 Baixando Node.js LTS...
echo.

REM Criar pasta temporaria
if not exist "temp" mkdir temp
cd temp

REM Baixar Node.js LTS (versao mais recente)
echo Baixando instalador do Node.js...
powershell -Command "& {Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi' -OutFile 'nodejs-installer.msi'}"

if not exist "nodejs-installer.msi" (
    echo ❌ Erro ao baixar Node.js!
    echo Tentando metodo alternativo...
    
    REM Tentar baixar via winget
    winget install OpenJS.NodeJS
    if %errorlevel% equ 0 (
        echo ✅ Node.js instalado via winget!
    ) else (
        echo ❌ Falha na instalacao via winget tambem.
        echo Por favor, instale manualmente: https://nodejs.org/
    )
    cd ..
    pause
    exit /b 1
)

echo ✅ Download concluido!
echo.
echo 🔧 Instalando Node.js...
echo Aguarde, isso pode levar alguns minutos...

REM Instalar Node.js silenciosamente
msiexec /i nodejs-installer.msi /quiet /norestart

REM Aguardar instalacao
timeout /t 10

REM Verificar instalacao
cd ..
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js instalado com sucesso!
    node --version
    npm --version
    echo.
    echo 🔧 Instalando dependencias do projeto...
    npm install
    if %errorlevel% equ 0 (
        echo ✅ Dependencias instaladas!
    ) else (
        echo ⚠️  Erro ao instalar dependencias. Execute: npm install
    )
) else (
    echo ❌ Erro na instalacao do Node.js!
    echo Por favor, instale manualmente: https://nodejs.org/
)

REM Limpar arquivos temporarios
if exist "temp" rmdir /s /q temp

echo.
echo ========================================
echo    INSTALACAO CONCLUIDA
echo ========================================
echo.
echo Comandos disponiveis:
echo   npm run dev     - Modo desenvolvimento
echo   npm run build   - Build para producao
echo   npm run preview - Preview da producao
echo.
pause


