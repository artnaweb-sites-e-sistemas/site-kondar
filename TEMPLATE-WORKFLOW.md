# Template: deploy-cpanel.yml

Copie este código e salve como: `.github/workflows/deploy-cpanel.yml`

```yaml
name: Deploy to cPanel

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to cPanel via FTP
      uses: SamKirkland/FTP-Deploy-Action@v4.3.4
      with:
        server: ${{ secrets.FTP_SERVER }}
        username: ${{ secrets.FTP_USERNAME }}
        password: ${{ secrets.FTP_PASSWORD }}
        local-dir: ./dist/
        server-dir: ./public_html/
        exclude: |
          **/.git*
          **/.git*/**
          **/node_modules/**
          **/.env
```

## 🔧 Personalizações

### **Para projetos sem Node.js:**
Remova as seções:
- `Setup Node.js`
- `Install dependencies` 
- `Build`

### **Para outros diretórios de build:**
Altere `local-dir: ./dist/` para:
- `./build/` (React)
- `./out/` (Next.js)
- `./public/` (Vue)

### **Para subdiretórios no cPanel:**
Altere `server-dir: ./public_html/` para:
- `./public_html/subpasta/`
- `./public_html/projeto/`
