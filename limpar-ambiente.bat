@echo off
echo ========================================
echo    LIMPEZA AMBIENTE KONDAR
echo ========================================
echo.
echo Este script ira limpar:
echo - node_modules
echo - dist
echo - cache do npm
echo - arquivos temporarios
echo.
echo Deseja continuar? (s/n)
set /p choice=
if /i "%choice%" neq "s" (
    echo Limpeza cancelada.
    pause
    exit /b 0
)

echo.
echo 🧹 Iniciando limpeza...
echo.

REM Limpar node_modules
if exist "node_modules" (
    echo Removendo node_modules...
    rmdir /s /q node_modules
    echo ✅ node_modules removido
) else (
    echo ⚠️  node_modules nao encontrado
)

REM Limpar dist
if exist "dist" (
    echo Removendo dist...
    rmdir /s /q dist
    echo ✅ dist removido
) else (
    echo ⚠️  dist nao encontrado
)

REM Limpar cache npm
echo Limpando cache npm...
npm cache clean --force >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Cache npm limpo
) else (
    echo ⚠️  Erro ao limpar cache npm
)

REM Limpar arquivos temporarios
if exist "temp" (
    echo Removendo arquivos temporarios...
    rmdir /s /q temp
    echo ✅ Arquivos temporarios removidos
)

REM Limpar logs
if exist "*.log" (
    echo Removendo logs...
    del /q *.log
    echo ✅ Logs removidos
)

echo.
echo ========================================
echo    LIMPEZA CONCLUIDA
echo ========================================
echo.
echo Para reinstalar dependencias:
echo   npm install
echo.
echo Para rebuild:
echo   build-producao.bat
echo.
pause


