# Servidor HTTP Simples para Kondar
param(
    [int]$Port = 8080
)

Write-Host "🚀 Iniciando servidor HTTP para Kondar..." -ForegroundColor Green
Write-Host "📍 URL: http://localhost:$Port" -ForegroundColor Cyan
Write-Host "📁 Servindo arquivos da pasta: dist" -ForegroundColor Yellow
Write-Host ""

# Verificar se a pasta dist existe
$DistPath = ".\dist"
if (-not (Test-Path $DistPath)) {
    Write-Host "❌ Erro: Pasta 'dist' não encontrada!" -ForegroundColor Red
    Write-Host "Execute primeiro: npm run build" -ForegroundColor Yellow
    exit 1
}

# Criar listener HTTP
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
    $listener.Start()
    Write-Host "✅ Servidor iniciado com sucesso!" -ForegroundColor Green
    Write-Host "🌐 Acesse: http://localhost:$Port" -ForegroundColor Cyan
    Write-Host "⏹️  Pressione Ctrl+C para parar" -ForegroundColor Gray
    Write-Host ""

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $localPath = $request.Url.LocalPath
            
            # Servir index.html para a raiz
            if ($localPath -eq "/") {
                $localPath = "/index.html"
            }

            # Construir caminho do arquivo
            $filePath = Join-Path $DistPath $localPath.TrimStart('/')
            $filePath = $filePath -replace '/', '\'

            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] $($request.HttpMethod) $localPath" -ForegroundColor White

            if (Test-Path $filePath) {
                $content = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $content.Length
                
                # Definir tipo de conteúdo baseado na extensão
                $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
                switch ($extension) {
                    ".html" { $response.ContentType = "text/html; charset=utf-8" }
                    ".css" { $response.ContentType = "text/css" }
                    ".js" { $response.ContentType = "application/javascript" }
                    ".json" { $response.ContentType = "application/json" }
                    ".png" { $response.ContentType = "image/png" }
                    ".jpg" { $response.ContentType = "image/jpeg" }
                    ".jpeg" { $response.ContentType = "image/jpeg" }
                    ".gif" { $response.ContentType = "image/gif" }
                    ".svg" { $response.ContentType = "image/svg+xml" }
                    ".ico" { $response.ContentType = "image/x-icon" }
                    ".woff" { $response.ContentType = "font/woff" }
                    ".woff2" { $response.ContentType = "font/woff2" }
                    ".ttf" { $response.ContentType = "font/ttf" }
                    default { $response.ContentType = "text/plain" }
                }

                $response.OutputStream.Write($content, 0, $content.Length)
                $response.StatusCode = 200
                Write-Host "  ✅ 200 OK ($($content.Length) bytes)" -ForegroundColor Green
            } else {
                $response.StatusCode = 404
                $notFoundContent = [System.Text.Encoding]::UTF8.GetBytes("404 - Arquivo não encontrado: $localPath")
                $response.ContentLength64 = $notFoundContent.Length
                $response.ContentType = "text/plain; charset=utf-8"
                $response.OutputStream.Write($notFoundContent, 0, $notFoundContent.Length)
                Write-Host "  ❌ 404 Não Encontrado" -ForegroundColor Red
            }

            $response.Close()
        } catch {
            Write-Host "Erro ao processar requisição: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
} catch {
    Write-Host "❌ Erro ao iniciar servidor: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    Write-Host "🛑 Servidor parado." -ForegroundColor Yellow
}


