@echo off
echo ========================================
echo    PREPARAR ARQUIVOS PARA UPLOAD MANUAL
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
echo Verificando arquivos na pasta dist...
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
echo Criando arquivo ZIP para upload manual...
if exist "dist.zip" del "dist.zip"
powershell Compress-Archive -Path "dist\*" -DestinationPath "dist.zip"

echo.
echo ========================================
echo    ARQUIVO ZIP CRIADO!
echo ========================================
echo.
echo Arquivo: dist.zip
echo.
echo INSTRUCOES PARA UPLOAD MANUAL:
echo 1. Acesse cPanel - Gerenciador de Arquivos
echo 2. Vá para public_html
echo 3. Faça upload do arquivo dist.zip
echo 4. Extraia o arquivo (botão direito - Extract)
echo 5. Mova os arquivos da pasta dist/ para public_html/
echo.
pause
