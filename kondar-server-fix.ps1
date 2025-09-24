# Servidor HTTP simples para o site Kondar
$port = 8080
$projectPath = "G:\Meu Drive\1)  PROJETOS\1 - [Bira Oliveira] - Empreendedor - Parcerias - Inestimento\4 - Parceiros\[1] - Kondar\Site Kondar"
$distPath = Join-Path $projectPath "dist"

Write-Host "🚀 Iniciando servidor para o site Kondar..." -ForegroundColor Green
Write-Host "📍 URL: http://localhost:$port" -ForegroundColor Cyan
Write-Host "📁 Pasta: $distPath" -ForegroundColor Yellow

# Verificar se a pasta dist existe
if (-not (Test-Path $distPath)) {
    Write-Host "❌ Erro: Pasta 'dist' não encontrada!" -ForegroundColor Red
    Write-Host "Caminho esperado: $distPath" -ForegroundColor Yellow
    exit 1
}

# Criar listener HTTP
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "✅ Servidor iniciado com sucesso!" -ForegroundColor Green
    Write-Host "🌐 Acesse: http://localhost:$port" -ForegroundColor Cyan
    Write-Host "⏹️  Pressione Ctrl+C para parar" -ForegroundColor Gray
    Write-Host ""

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $localPath = $request.Url.LocalPath
            if ($localPath -eq "/") { $localPath = "/index.html" }

            $filePath = Join-Path $distPath $localPath.TrimStart('/')
            $filePath = $filePath -replace '/', '\'

            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] $($request.HttpMethod) $localPath" -ForegroundColor White

            if (Test-Path $filePath) {
                $content = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $content.Length
                
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
                Write-Host "  ❌ 404 Not Found" -ForegroundColor Red
            }

            $response.Close()
        } catch {
            Write-Host "Erro ao processar requisição: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
} catch {
    Write-Host "❌ Erro: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    Write-Host "🛑 Servidor parado." -ForegroundColor Yellow
}
