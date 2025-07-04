# Lead Management Frontend

Este é o frontend Angular do sistema de gerenciamento de leads.

## Funcionalidades

- **Aba Invited**: Exibe todos os leads com status "Waiting" (aguardando)
  - Mostra informações básicas do contato (primeiro nome, data, localização, categoria, ID, descrição, preço)
  - Botões para aceitar ou recusar leads
  - Ao aceitar: se preço > $500, aplica 10% de desconto automaticamente

- **Aba Accepted**: Exibe todos os leads com status "Accepted" (aceitos)
  - Mostra informações completas do contato (nome completo, telefone, email)
  - Todas as outras informações do lead

## Pré-requisitos

- Node.js 18+ 
- Angular CLI 19+
- API .NET Core rodando (veja instruções na pasta `back/`)

## Instalação

1. Navegue até a pasta do frontend:
```bash
cd front/LeadManagementFront
```

2. Instale as dependências:
```bash
npm install
```

## Configuração

1. Verifique se a URL da API está correta em `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7074'  // Ajuste conforme sua API
};
```

2. Certifique-se de que a API .NET Core está rodando na URL configurada.

## Execução

Para executar em modo de desenvolvimento:
```bash
npm start
```

A aplicação estará disponível em `http://localhost:4200`

## Build para Produção

```bash
npm run build
```

Os arquivos de build estarão na pasta `dist/`

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── lead-card/          # Componente do card de lead
│   ├── models/
│   │   └── lead.model.ts       # Interfaces e enums
│   ├── services/
│   │   └── lead.service.ts     # Serviço para API calls
│   ├── app.component.*         # Componente principal com abas
│   └── app.config.ts          # Configuração da aplicação
├── environments/               # Configurações de ambiente
└── styles.css                 # Estilos globais
```

## Tecnologias Utilizadas

- Angular 19 (Standalone Components)
- TypeScript
- RxJS
- CSS Grid/Flexbox
- HttpClient para consumo da API

## Design

O design replica as imagens fornecidas no desafio:
- Layout responsivo com duas abas
- Cards estilizados para cada lead
- Interface limpa e moderna
- Feedback visual para ações do usuário
