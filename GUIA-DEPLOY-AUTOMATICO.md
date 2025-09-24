# Guia Completo: Deploy Automático GitHub Actions + cPanel

## Pré-requisitos
- Conta GitHub
- Hospedagem com cPanel
- Node.js instalado
- Git configurado

## Passo a Passo Completo

### 1. Configurar o Projeto

```bash
# Inicializar Git
git init

# Configurar usuário (se não configurado)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Adicionar arquivos
git add .
git commit -m "Initial commit"
```

### 2. Criar Repositório no GitHub

1. **Acesse:** https://github.com/new
2. **Nome:** `nome-do-projeto`
3. **Descrição:** Descrição do projeto
4. **Visibilidade:** Private (recomendado)
5. **Clique:** "Create repository"

### 3. Conectar Projeto Local ao GitHub

```bash
# Adicionar remote
git remote add origin https://github.com/SEU-USUARIO/nome-do-projeto.git

# Fazer primeiro push
git branch -M main
git push -u origin main
```

### 4. Criar Arquivo de Workflow

Criar arquivo: `.github/workflows/deploy-cpanel.yml`

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

### 5. Configurar Secrets no GitHub

1. **Acesse:** `https://github.com/SEU-USUARIO/nome-do-projeto`
2. **Vá em:** Settings → Secrets and variables → Actions
3. **Adicione 3 secrets:**

   **FTP_SERVER:**
   - Valor: `ftp.seudominio.com.br`

   **FTP_USERNAME:**
   - Valor: `seuusuario`

   **FTP_PASSWORD:**
   - Valor: `suasenhaftp`

### 6. Commit do Workflow

```bash
# Adicionar arquivo de workflow
git add .github/workflows/deploy-cpanel.yml

# Commit
git commit -m "Add: GitHub Actions workflow para deploy automático"

# Push
git push origin main
```

### 7. Testar Deploy Automático

```bash
# Fazer uma pequena alteração
# Exemplo: alterar texto em index.html

# Commit e push
git add .
git commit -m "Test: Deploy automático"
git push origin main
```

### 8. Verificar Execução

1. **GitHub:** Aba "Actions" → Ver workflow executando
2. **cPanel:** Aguardar 2-3 minutos
3. **Site:** Verificar se atualizou

## Comandos Úteis

### Workflow Diário:
```bash
# Editar código
# Depois:
git add .
git commit -m "Descrição da alteração"
git push origin main
```

### Verificar Status:
```bash
git status
git log --oneline
```

### Clonar Projeto em Novo Computador:
```bash
git clone https://github.com/SEU-USUARIO/nome-do-projeto.git
cd nome-do-projeto
npm install
```

## Troubleshooting

### Workflow não executa:
- Verificar se arquivo `.github/workflows/deploy-cpanel.yml` existe
- Verificar se foi commitado
- Verificar se secrets estão configurados

### Deploy falha:
- Verificar credenciais FTP
- Verificar se pasta `dist/` existe após build
- Verificar logs no GitHub Actions

### Site não atualiza:
- Aguardar 2-3 minutos
- Verificar se arquivos estão em `public_html/`
- Limpar cache do navegador

## Vantagens desta Solução

- **Deploy Automático:** Sem intervenção manual  
- **Build Automático:** Sempre versão mais recente  
- **Backup Automático:** Código salvo no GitHub  
- **Mobilidade:** Trabalhe de qualquer lugar  
- **Profissional:** Workflow de desenvolvimento moderno  

## Suporte

- **GitHub Actions:** https://docs.github.com/en/actions
- **FTP Deploy Action:** https://github.com/SamKirkland/FTP-Deploy-Action
- **cPanel Git:** Documentação do seu provedor

---

**Pronto! Agora você tem deploy automático funcionando!**
