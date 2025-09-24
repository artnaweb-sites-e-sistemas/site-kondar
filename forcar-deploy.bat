@echo off
echo ========================================
echo    FORCAR DEPLOY NO CPANEL
echo ========================================
echo.

echo Fazendo build completo...
npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ERRO: Build falhou!
    pause
    exit /b 1
)

echo.
echo Build concluido! Verificando arquivos na pasta dist...
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
echo Fazendo commit com timestamp...
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - Forcar atualizacao"
git push origin main

echo.
echo ========================================
echo    DEPLOY ENVIADO!
echo ========================================
echo.
echo AGORA NO CPANEL:
echo 1. Va em Git Version Control
echo 2. Clique em "Update from Remote"
echo 3. Clique em "Deploy HEAD Commit"
echo.
echo Ou aguarde alguns minutos para o deploy automatico
echo.
pause
