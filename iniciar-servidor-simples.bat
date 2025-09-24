@echo off
echo ========================================
echo    SERVIDOR KONDAR - INICIANDO
echo ========================================
echo.

REM Verificar se a pasta dist existe
if not exist "dist" (
    echo ERRO: Pasta dist nao encontrada!
    echo Execute primeiro: npm run build
    pause
    exit /b 1
)

echo Pasta dist encontrada!
echo.
echo Iniciando servidor na porta 8080...
echo URL: http://localhost:8080
echo.
echo Pressione Ctrl+C para parar o servidor
echo ========================================
echo.

REM Usar PowerShell para iniciar o servidor
powershell -ExecutionPolicy Bypass -Command "& '.\servidor-simples.ps1' -Port 8080"

pause


