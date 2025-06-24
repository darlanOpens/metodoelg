# Método ELG - Landing Page

Landing page para o webinar "Como Dobrar sua Receita Sem Gastar Mais em Tráfego" do Douglas Conrad.

## 🚀 Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes de UI

## 🐳 Docker & Deployment

### Desenvolvimento Local

```bash
# Desenvolvimento
npm run dev
# Acesso: http://localhost:3000/metodoelg

# Produção local
npm run build
npm start
# Acesso: http://localhost:3000/metodoelg
```

### Docker Local

```bash
# Build da imagem
docker build -t metodoelg .

# Executar container
docker run -p 3000:3000 metodoelg

# Ou usar docker-compose
docker-compose up --build
```

### Deploy no Easypanel

1. **Conectar repositório:** https://github.com/darlanOpens/metodoelg
2. **Configurar serviço:**
   - **Tipo:** Docker
   - **Build Context:** `/`
   - **Dockerfile:** `Dockerfile`
   - **Porta:** `3000`
   
3. **Variáveis de ambiente:**
   ```
   NODE_ENV=production
   PORT=3000
   HOSTNAME=0.0.0.0
   ```

4. **Domínio:** Configure para apontar para `/metodoelg`

### Estrutura de Paths

O projeto está configurado para rodar em `/metodoelg`:
- **Local:** `http://localhost:3000/metodoelg`
- **Produção:** `seudominio.com.br/metodoelg`

## 📁 Estrutura

```
/
├── app/                 # Páginas Next.js 13+
├── components/          # Componentes React
├── public/             # Assets estáticos
├── Dockerfile          # Configuração Docker
├── docker-compose.yml  # Desenvolvimento Docker
└── next.config.mjs     # Configuração Next.js
```

## 🛠️ Comandos Úteis

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build produção
npm run build

# Executar produção
npm start

# Docker build
docker build -t metodoelg .

# Docker run
docker run -p 3000:3000 metodoelg
``` 