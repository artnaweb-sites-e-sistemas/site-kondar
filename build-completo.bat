@echo off
echo ========================================
echo    BUILD CORRIGIDO - TODAS AS PAGINAS
echo ========================================
echo.

echo Fazendo build com todas as paginas...
npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ERRO: Build falhou!
    pause
    exit /b 1
)

echo.
echo Build concluido! Verificando arquivos...
echo.

if exist "dist\parceiros.html" (
    echo ✅ parceiros.html - OK
) else (
    echo ❌ parceiros.html - FALTANDO
)

if exist "dist\index.html" (
    echo ✅ index.html - OK
) else (
    echo ❌ index.html - FALTANDO
)

if exist "dist\ssrh.html" (
    echo ✅ ssrh.html - OK
) else (
    echo ❌ ssrh.html - FALTANDO
)

echo.
echo Fazendo commit e push...
git add .
git commit -m "Fix: Adicionado parceiros.html ao build"
git push origin main

echo.
echo ========================================
echo    DEPLOY AUTOMATICO INICIADO!
echo ========================================
echo.
echo Agora todas as paginas estao na pasta dist/
echo e serao enviadas para o cPanel automaticamente!
echo.
pause
