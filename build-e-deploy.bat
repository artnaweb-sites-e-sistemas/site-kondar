@echo off
echo ========================================
echo    BUILD E DEPLOY AUTOMATICO
echo ========================================
echo.

echo Fazendo build do projeto...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ERRO: Build falhou!
    pause
    exit /b 1
)

echo.
echo Build concluido com sucesso!
echo.

echo Fazendo commit das alteracoes...
git add .
git commit -m "Build: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

echo.
echo Fazendo push para GitHub...
git push origin main

echo.
echo ========================================
echo    DEPLOY AUTOMATICO INICIADO!
echo ========================================
echo.
echo O cPanel vai detectar as alteracoes e fazer
echo o deploy automatico para public_html
echo.
echo Aguarde alguns minutos e acesse seu site!
echo.
pause
