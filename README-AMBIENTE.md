# 🚀 Ambiente Kondar - Node.js + Python

## 📋 Visão Geral

Este ambiente completo inclui Node.js e Python para desenvolvimento e produção do site Kondar.

## 🛠️ Instalação

### Instalação Automática (Recomendado)
```bash
# Execute o arquivo de instalação completa
instalar-tudo.bat
```

### Instalação Manual
```bash
# Instalar Node.js
instalar-nodejs.bat

# Instalar Python
instalar-python.bat
```

## 🎯 Comandos Disponíveis

### 🔧 Desenvolvimento
```bash
# Servidor de desenvolvimento com hot reload
desenvolvimento.bat
# URL: http://localhost:5173
```

### 🏭 Produção
```bash
# Build para produção
build-producao.bat

# Preview da produção
preview-producao.bat
# URL: http://localhost:4173
```

### 🌐 Servidores
```bash
# Servidor Python (recomendado para produção)
servidor-python.bat
# URL: http://localhost:8080

# Servidor simples PowerShell
iniciar-servidor-simples.bat
# URL: http://localhost:8080
```

## 📁 Estrutura do Projeto

```
Site Kondar/
├── src/                    # Código fonte React/TypeScript
├── dist/                   # Build de produção
├── node_modules/           # Dependências Node.js
├── package.json           # Configuração Node.js
├── vite.config.ts         # Configuração Vite
├── tailwind.config.js     # Configuração Tailwind
└── scripts/               # Scripts de automação
```

## 🔄 Fluxo de Trabalho

### 1. Desenvolvimento
1. Execute `desenvolvimento.bat`
2. Acesse `http://localhost:5173`
3. Edite arquivos em `src/`
4. O navegador atualiza automaticamente

### 2. Produção
1. Execute `build-producao.bat`
2. Execute `preview-producao.bat` para testar
3. Execute `servidor-python.bat` para servir

## 🐛 Solução de Problemas

### Node.js não encontrado
```bash
# Reinstalar Node.js
instalar-nodejs.bat
```

### Python não encontrado
```bash
# Reinstalar Python
instalar-python.bat
```

### Porta em uso
- Mude a porta nos scripts
- Ou feche outros servidores

### Dependências não instaladas
```bash
# Reinstalar dependências
npm install
```

## 📊 Recursos

- ✅ Hot Reload (desenvolvimento)
- ✅ TypeScript/React
- ✅ Tailwind CSS
- ✅ Build otimizado
- ✅ Servidor Python
- ✅ Servidor PowerShell
- ✅ Instalação automática

## 🎨 Personalização

### Alterar Portas
Edite os scripts `.bat` e altere as portas:
- Desenvolvimento: 5173
- Preview: 4173
- Produção: 8080

### Adicionar Dependências
```bash
# Node.js
npm install nome-do-pacote

# Python
pip install nome-do-pacote
```

## 📞 Suporte

Se encontrar problemas:
1. Verifique se Node.js e Python estão instalados
2. Execute `instalar-tudo.bat` novamente
3. Verifique se as portas estão livres
4. Consulte os logs de erro nos scripts

---

**Desenvolvido para Kondar** 🚀


