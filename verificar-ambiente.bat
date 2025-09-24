@echo off
echo ========================================
echo    VERIFICACAO AMBIENTE KONDAR
echo ========================================
echo.

echo 🔍 Verificando instalacoes...
echo.

REM Verificar Node.js
echo Node.js:
node --version >nul 2>&1
if %errorlevel% equ 0 (
    for /f "tokens=*" %%i in ('node --version') do echo ✅ %%i
    for /f "tokens=*" %%i in ('npm --version') do echo ✅ NPM %%i
) else (
    echo ❌ Node.js nao instalado
)
echo.

REM Verificar Python
echo Python:
python --version >nul 2>&1
if %errorlevel% equ 0 (
    for /f "tokens=*" %%i in ('python --version') do echo ✅ %%i
    pip --version >nul 2>&1
    if %errorlevel% equ 0 (
        for /f "tokens=*" %%i in ('pip --version') do echo ✅ %%i
    ) else (
        echo ❌ PIP nao encontrado
    )
) else (
    echo ❌ Python nao instalado
)
echo.

REM Verificar estrutura do projeto
echo Estrutura do Projeto:
if exist "src" (
    echo ✅ Pasta src encontrada
) else (
    echo ❌ Pasta src nao encontrada
)

if exist "package.json" (
    echo ✅ package.json encontrado
) else (
    echo ❌ package.json nao encontrado
)

if exist "node_modules" (
    echo ✅ Dependencias Node.js instaladas
) else (
    echo ❌ Dependencias Node.js nao instaladas
)

if exist "dist" (
    echo ✅ Build de producao encontrado
) else (
    echo ⚠️  Build de producao nao encontrado (execute build-producao.bat)
)
echo.

REM Verificar portas
echo Portas em Uso:
netstat -an | findstr ":5173" >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠️  Porta 5173 (desenvolvimento) em uso
) else (
    echo ✅ Porta 5173 (desenvolvimento) livre
)

netstat -an | findstr ":4173" >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠️  Porta 4173 (preview) em uso
) else (
    echo ✅ Porta 4173 (preview) livre
)

netstat -an | findstr ":8080" >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠️  Porta 8080 (producao) em uso
) else (
    echo ✅ Porta 8080 (producao) livre
)
echo.

echo ========================================
echo    RESUMO
echo ========================================
echo.

REM Contar problemas
set /a problems=0

node --version >nul 2>&1
if %errorlevel% neq 0 set /a problems+=1

python --version >nul 2>&1
if %errorlevel% neq 0 set /a problems+=1

if not exist "src" set /a problems+=1
if not exist "package.json" set /a problems+=1

if %problems% equ 0 (
    echo ✅ Ambiente configurado corretamente!
    echo.
    echo Comandos disponiveis:
    echo   desenvolvimento.bat     - Iniciar desenvolvimento
    echo   build-producao.bat      - Build para producao
    echo   preview-producao.bat    - Preview da producao
) else (
    echo ❌ %problems% problema(s) encontrado(s)!
    echo.
    echo Para corrigir, execute:
    echo   instalar-tudo.bat
)

echo.
pause


