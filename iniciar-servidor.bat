@echo off
echo ========================================
echo    SERVIDOR KONDAR - INICIANDO
echo ========================================
echo.

REM Definir caminhos
set "PROJECT_PATH=G:\Meu Drive\1)  PROJETOS\1 - [Bira Oliveira] - Empreendedor - Parcerias - Inestimento\4 - Parceiros\[1] - Kondar\Site Kondar"
set "DIST_PATH=%PROJECT_PATH%\dist"
set "PORT=8080"

echo Verificando pasta dist...
if not exist "%DIST_PATH%" (
    echo ERRO: Pasta dist nao encontrada!
    echo Caminho esperado: %DIST_PATH%
    pause
    exit /b 1
)

echo Pasta dist encontrada!
echo.
echo Iniciando servidor na porta %PORT%...
echo URL: http://localhost:%PORT%
echo.
echo Pressione Ctrl+C para parar o servidor
echo ========================================
echo.

REM Tentar usar Python primeiro
python -m http.server %PORT% --directory "%DIST_PATH%" 2>nul
if %errorlevel% neq 0 (
    echo Python nao disponivel, tentando Node.js...
    REM Tentar usar Node.js
    cd /d "%PROJECT_PATH%"
    npx vite preview --port %PORT% --host 2>nul
    if %errorlevel% neq 0 (
        echo Node.js nao disponivel, usando PowerShell...
        REM Usar PowerShell como ultimo recurso
        powershell -ExecutionPolicy Bypass -Command "& '%PROJECT_PATH%\kondar-server-fix.ps1'"
    )
)

pause
