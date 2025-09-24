@echo off
echo ========================================
echo    CONFIGURAR DEPLOY AUTOMATICO CPANEL
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
echo Build concluido! Fazendo commit...
git add .
git commit -m "Setup: GitHub Actions deploy automático para cPanel"
git push origin main

echo.
echo ========================================
echo    CONFIGURACAO NECESSARIA NO GITHUB
echo ========================================
echo.
echo 1. Acesse seu repositorio no GitHub
echo 2. Va em Settings ^> Secrets and variables ^> Actions
echo 3. Adicione os seguintes secrets:
echo.
echo    FTP_SERVER: ftp.kondar.com.br
echo    FTP_USERNAME: kondarcom
echo    FTP_PASSWORD: [sua senha FTP]
echo.
echo 4. Aguarde o GitHub Actions executar automaticamente
echo.
echo O deploy sera feito automaticamente a cada push!
echo.
pause
