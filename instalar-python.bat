@echo off
echo ========================================
echo    INSTALACAO PYTHON - KONDAR
echo ========================================
echo.

REM Verificar se Python ja esta instalado
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Python ja esta instalado!
    python --version
    echo.
    echo Deseja reinstalar? (s/n)
    set /p choice=
    if /i "%choice%" neq "s" (
        echo Instalacao cancelada.
        pause
        exit /b 0
    )
)

echo 📥 Baixando Python...
echo.

REM Criar pasta temporaria
if not exist "temp" mkdir temp
cd temp

REM Baixar Python (versao mais recente)
echo Baixando instalador do Python...
powershell -Command "& {Invoke-WebRequest -Uri 'https://www.python.org/ftp/python/3.12.1/python-3.12.1-amd64.exe' -OutFile 'python-installer.exe'}"

if not exist "python-installer.exe" (
    echo ❌ Erro ao baixar Python!
    echo Tentando metodo alternativo...
    
    REM Tentar baixar via winget
    winget install Python.Python.3.12
    if %errorlevel% equ 0 (
        echo ✅ Python instalado via winget!
    ) else (
        echo ❌ Falha na instalacao via winget tambem.
        echo Por favor, instale manualmente: https://python.org/
    )
    cd ..
    pause
    exit /b 1
)

echo ✅ Download concluido!
echo.
echo 🔧 Instalando Python...
echo Aguarde, isso pode levar alguns minutos...

REM Instalar Python com pip
python-installer.exe /quiet InstallAllUsers=1 PrependPath=1 Include_pip=1

REM Aguardar instalacao
timeout /t 15

REM Verificar instalacao
cd ..
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Python instalado com sucesso!
    python --version
    pip --version
    echo.
    echo 🔧 Instalando dependencias Python...
    pip install flask requests beautifulsoup4
    if %errorlevel% equ 0 (
        echo ✅ Dependencias Python instaladas!
    ) else (
        echo ⚠️  Erro ao instalar dependencias Python.
    )
) else (
    echo ❌ Erro na instalacao do Python!
    echo Por favor, instale manualmente: https://python.org/
)

REM Limpar arquivos temporarios
if exist "temp" rmdir /s /q temp

echo.
echo ========================================
echo    INSTALACAO CONCLUIDA
echo ========================================
echo.
echo Python esta pronto para uso!
echo.
pause


