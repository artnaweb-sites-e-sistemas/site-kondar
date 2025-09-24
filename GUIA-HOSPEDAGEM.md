# 🚀 Guia de Hospedagem - Site Kondar no cPanel

## 📋 Arquivos Necessários para Upload

### Arquivos Principais:
- ✅ `index.html` - Página principal
- ✅ `parceiros.html` - Página de parceiros  
- ✅ `ssrh.html` - Página SSRH
- ✅ `package.json` - Configurações do projeto
- ✅ `vite.config.ts` - Configuração do Vite
- ✅ `tailwind.config.js` - Configuração do Tailwind
- ✅ `tsconfig.json` - Configuração TypeScript

### Pasta src/ (com todos os componentes):
- ✅ `src/App.tsx`
- ✅ `src/App-ssrh.tsx`
- ✅ `src/main.tsx`
- ✅ `src/main-ssrh.tsx`
- ✅ `src/index.css`
- ✅ `src/components/` (toda a pasta)

## 🎯 Passos para Upload no cPanel

### 1. Preparar Arquivos
1. Selecione todos os arquivos listados acima
2. Compacte em um arquivo ZIP
3. Nome sugerido: `site-kondar.zip`

### 2. Upload no cPanel
1. **Acesse seu cPanel**
2. **Vá em "Gerenciador de Arquivos"**
3. **Navegue até `public_html`**
4. **Faça upload do arquivo ZIP**
5. **Extraia os arquivos** (botão direito → Extract)

### 3. Configuração Final
1. **Mova os arquivos** da pasta extraída para `public_html/`
2. **Acesse seu domínio:**
   - Página principal: `seudominio.com`
   - Parceiros: `seudominio.com/parceiros.html`
   - SSRH: `seudominio.com/ssrh.html`

## ⚠️ Importante
- **NÃO faça upload** da pasta `node_modules/`
- **NÃO faça upload** da pasta `.git/`
- **NÃO faça upload** da pasta `dist/` (se existir)

## 🔧 Se Precisar de Build
Se seu cPanel tiver Node.js:
1. Faça upload de todo o projeto
2. No Terminal do cPanel:
   ```bash
   npm install
   npm run build
   ```
3. Mova arquivos da pasta `dist/` para `public_html/`

## 📞 Suporte
Se tiver dúvidas, consulte a documentação do seu provedor de hospedagem ou entre em contato com o suporte técnico.
