@echo off
echo ========================================
echo    INSTALACAO COMPLETA KONDAR
echo ========================================
echo.
echo Este script ira instalar Node.js e Python
echo e configurar o ambiente de desenvolvimento.
echo.
echo Deseja continuar? (s/n)
set /p choice=
if /i "%choice%" neq "s" (
    echo Instalacao cancelada.
    pause
    exit /b 0
)

echo.
echo ========================================
echo    INSTALANDO NODE.JS
echo ========================================
call instalar-nodejs.bat

echo.
echo ========================================
echo    INSTALANDO PYTHON
echo ========================================
call instalar-python.bat

echo.
echo ========================================
echo    CONFIGURACAO FINAL
echo ========================================
echo.

REM Verificar instalacoes
echo Verificando instalacoes...

node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js: OK
) else (
    echo ❌ Node.js: FALHOU
)

python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Python: OK
) else (
    echo ❌ Python: FALHOU
)

echo.
echo ========================================
echo    INSTALACAO CONCLUIDA
echo ========================================
echo.
echo Comandos disponiveis:
echo.
echo DESENVOLVIMENTO:
echo   desenvolvimento.bat     - Servidor de desenvolvimento
echo.
echo PRODUCAO:
echo   build-producao.bat      - Build para producao
echo   preview-producao.bat    - Preview da producao
echo   servidor-python.bat     - Servidor Python
echo   iniciar-servidor-simples.bat - Servidor simples
echo.
echo TESTE RAPIDO:
echo   desenvolvimento.bat
echo.
pause


