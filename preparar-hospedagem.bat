@echo off
echo ========================================
echo    PREPARANDO ARQUIVOS PARA HOSPEDAGEM
echo ========================================
echo.

echo Criando pasta para hospedagem...
if not exist "hospedagem" mkdir hospedagem

echo Copiando arquivos principais...
copy "index.html" "hospedagem\"
copy "parceiros.html" "hospedagem\"
copy "ssrh.html" "hospedagem\"
copy "package.json" "hospedagem\"
copy "vite.config.ts" "hospedagem\"
copy "tailwind.config.js" "hospedagem\"
copy "tsconfig.json" "hospedagem\"
copy "tsconfig.app.json" "hospedagem\"
copy "tsconfig.node.json" "hospedagem\"
copy "postcss.config.js" "hospedagem\"

echo Copiando pasta src...
xcopy "src" "hospedagem\src" /E /I /Y

echo.
echo ========================================
echo    ARQUIVOS PRONTOS PARA UPLOAD!
echo ========================================
echo.
echo Pasta criada: hospedagem\
echo.
echo Próximos passos:
echo 1. Compacte a pasta 'hospedagem' em ZIP
echo 2. Faça upload no cPanel
echo 3. Extraia na pasta public_html
echo.
pause
