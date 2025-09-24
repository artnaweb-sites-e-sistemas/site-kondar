@echo off
echo ========================================
echo    ATIVAR GITHUB ACTIONS WORKFLOW
echo ========================================
echo.

echo Adicionando arquivo de workflow ao Git...
git add .github/workflows/deploy-cpanel.yml

echo.
echo Fazendo commit do workflow...
git commit -m "Add: GitHub Actions workflow para deploy automático no cPanel"

echo.
echo Fazendo push para GitHub...
git push origin main

echo.
echo ========================================
echo    WORKFLOW ATIVADO!
echo ========================================
echo.
echo Agora va no GitHub:
echo 1. Acesse: https://github.com/artnaweb-sites-e-sistemas/site-kondar
echo 2. Clique na aba "Actions"
echo 3. Voce deve ver o workflow "Deploy to cPanel" executando
echo.
echo Se nao aparecer, aguarde 1-2 minutos e atualize a pagina
echo.
pause
