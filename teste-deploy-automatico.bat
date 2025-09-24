@echo off
echo ========================================
echo    TESTE DEPLOY AUTOMATICO
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
echo Fazendo commit para testar deploy automatico...
git add .
git commit -m "Auto-deploy test: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin main

echo.
echo ========================================
echo    DEPLOY AUTOMATICO INICIADO!
echo ========================================
echo.
echo O cPanel deve detectar as alteracoes e fazer
echo o deploy automatico para public_html
echo.
echo Aguarde 2-3 minutos e verifique o public_html
echo.
echo Se nao funcionar, vamos tentar outras configuracoes
echo.
pause
