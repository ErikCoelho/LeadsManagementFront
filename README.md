# Lead Management Frontend (Angular)

Interface moderna para gerenciamento de leads desenvolvida com Angular 19 e design responsivo.



## 🎯 Funcionalidades

### 📋 Aba "Invited" (Leads Aguardando)
- Lista leads com status "Waiting" 
- Cards com: nome, data, localização, categoria, ID, descrição, preço
- **Badge de desconto** para leads > $500 💰
- Botões "Accept" e "Decline"
- Integração com API para atualizar status

### ✅ Aba "Accepted" (Leads Aceitos)
- Lista leads com status "Accepted"
- Informações completas: nome completo, telefone, email
- Histórico de leads processados

## 🚀 Como Executar

### 🐳 Docker (Recomendado)

```bash
# Build e execução
docker-compose up -d

# Verificar status
docker-compose ps

# Ver logs
docker-compose logs -f frontend
```

**Acesso:** http://localhost:4200

### 💻 Desenvolvimento Local

**Pré-requisitos:**
- Node.js 18+
- Angular CLI 19+

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm start

# Build para produção
npm run build
```

## 📁 Estrutura do Projeto

```
front/LeadManagementFront/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── lead-card/       # Componente do card de lead
│   │   ├── models/
│   │   │   └── lead.model.ts    # Interfaces e enums
│   │   ├── services/
│   │   │   └── lead.service.ts  # Serviço para API
│   │   ├── app.component.*      # Componente principal
│   │   └── app.config.ts        # Configuração da app
│   ├── environments/            # Configurações de ambiente
│   └── styles.css              # Estilos globais
├── Dockerfile                   # Container do frontend
├── docker-compose.yml           # Orquestração local
├── nginx.conf                   # Configuração nginx
└── README.md                    # Este arquivo
```

## 🎨 Design

### Interface Baseada no Mockup
- ✅ Layout com duas abas (Invited/Accepted)
- ✅ Cards estilizados com avatares coloridos
- ✅ Botões de ação (Accept/Decline)
- ✅ **Indicador de desconto** para leads > $500
- ✅ Design responsivo
- ✅ Estados de loading/error/empty

### Componentes
- **Lead Card:** Componente reutilizável para exibir leads
- **Tabs:** Navegação entre Invited/Accepted
- **Loading/Error:** Estados visuais para UX

## 🔌 Integração com API

### Endpoints Consumidos
```typescript
// Buscar leads aguardando
GET /v1/leads/waiting?pageNumber=1&pageSize=10

// Buscar leads aceitos  
GET /v1/leads/accepted?pageNumber=1&pageSize=10

// Atualizar status do lead
PUT /v1/leads/{id}
Body: { "category": 2 } // 2=Accepted, 3=Rejected
```

## 💎 Características Técnicas

### Angular 19 Features
- **Standalone Components** (sem NgModules)
- **Signals** para reatividade
- **HttpClient** para consumo de API
- **TypeScript** com tipagem forte
- **RxJS** para programação reativa

### Responsividade
- CSS Grid para layout de cards
- Flexbox para componentes
- Breakpoints para mobile/tablet/desktop
- Design mobile-first

### CORS
O frontend está configurado para consumir APIs em:
- `http://localhost:5000` (Docker)
- `https://localhost:7074` (Desenvolvimento)

## 🎯 Funcionalidades Especiais

### Badge de Desconto
- Aparece automaticamente em leads > $500
- Texto: "10% discount"
- Ícone: 💰
- Animação de pulse para chamar atenção
- Apenas na aba "Invited"

### Estados Visuais
- **Loading:** Spinner + texto
- **Error:** Mensagem + botão retry
- **Empty:** Ilustração + texto explicativo
- **Success:** Feedback visual nas ações

## 🛠️ Tecnologias

- **Angular 19** - Framework principal
- **TypeScript** - Linguagem
- **RxJS** - Programação reativa  
- **CSS Grid/Flexbox** - Layout
- **nginx** - Servidor web (produção)
- **Docker** - Containerização

## 📱 Suporte a Dispositivos

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px+) 
- ✅ Tablet (768px+)
- ✅ Mobile (320px+)

## 📄 Licença

Este projeto é parte de um desafio técnico.
