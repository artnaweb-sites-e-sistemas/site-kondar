# Script para Build e Deploy Automático
# Execute este script no diretório do projeto

Write-Host "========================================" -ForegroundColor Green
Write-Host "    BUILD E DEPLOY AUTOMATICO" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Encontrar o diretório do projeto
$projectDir = Get-ChildItem -Recurse -Directory | Where-Object {$_.Name -eq "Site Kondar"} | Select-Object -First 1

if ($projectDir) {
    Write-Host "Projeto encontrado em: $($projectDir.FullName)" -ForegroundColor Yellow
    Set-Location $projectDir.FullName
    
    Write-Host "Fazendo build do projeto..." -ForegroundColor Cyan
    npm run build
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Build concluído com sucesso!" -ForegroundColor Green
        Write-Host ""
        
        Write-Host "Fazendo commit das alterações..." -ForegroundColor Cyan
        git add .
        git commit -m "Build: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        
        Write-Host ""
        Write-Host "Fazendo push para GitHub..." -ForegroundColor Cyan
        git push origin main
        
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "    DEPLOY AUTOMATICO INICIADO!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "O cPanel vai detectar as alterações e fazer" -ForegroundColor Yellow
        Write-Host "o deploy automático para public_html" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Aguarde alguns minutos e acesse seu site!" -ForegroundColor Yellow
    } else {
        Write-Host "ERRO: Build falhou!" -ForegroundColor Red
    }
} else {
    Write-Host "ERRO: Diretório do projeto não encontrado!" -ForegroundColor Red
}

Write-Host ""
Write-Host "Pressione qualquer tecla para continuar..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
