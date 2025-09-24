# Simple HTTP Server for Kondar Site
param(
    [int]$Port = 8080
)

# Get the script directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$DistPath = Join-Path $ScriptDir "dist"

Write-Host "🚀 Starting simple HTTP server for Kondar site..." -ForegroundColor Green
Write-Host "📍 URL: http://localhost:$Port" -ForegroundColor Cyan
Write-Host "📁 Serving files from: $DistPath" -ForegroundColor Yellow

# Check if dist folder exists
if (-not (Test-Path $DistPath)) {
    Write-Host "❌ Error: 'dist' folder not found!" -ForegroundColor Red
    Write-Host "Please make sure you're running this script from the project root directory." -ForegroundColor Yellow
    exit 1
}

# Create HTTP listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
    $listener.Start()
    Write-Host "✅ Server started successfully!" -ForegroundColor Green
    Write-Host "🌐 Access: http://localhost:$Port" -ForegroundColor Cyan
    Write-Host "⏹️  Press Ctrl+C to stop" -ForegroundColor Gray
    Write-Host ""

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $localPath = $request.Url.LocalPath
            
            # Serve index.html for root path
            if ($localPath -eq "/") {
                $localPath = "/index.html"
            }

            # Build file path
            $filePath = Join-Path $DistPath $localPath.TrimStart('/')
            $filePath = $filePath -replace '/', '\'

            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] $($request.HttpMethod) $localPath" -ForegroundColor White

            if (Test-Path $filePath) {
                $content = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $content.Length
                
                # Set content type based on file extension
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
                $notFoundContent = [System.Text.Encoding]::UTF8.GetBytes("404 - File not found: $localPath")
                $response.ContentLength64 = $notFoundContent.Length
                $response.ContentType = "text/plain; charset=utf-8"
                $response.OutputStream.Write($notFoundContent, 0, $notFoundContent.Length)
                Write-Host "  ❌ 404 Not Found" -ForegroundColor Red
            }

            $response.Close()
        } catch {
            Write-Host "Error processing request: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
} catch {
    Write-Host "❌ Error starting server: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    Write-Host "🛑 Server stopped." -ForegroundColor Yellow
}
