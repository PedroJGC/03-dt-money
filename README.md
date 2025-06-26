# 💰 DT Money

<div align="center">
  <img src="src/assets/logo.svg" alt="DT Money Logo" width="200"/>
  
  <p align="center">
    <strong>Uma aplicação moderna para controle financeiro pessoal</strong>
  </p>
  
  <p align="center">
    Gerencie suas finanças de forma simples e intuitiva com uma interface elegante e funcional
  </p>

  <br />

  <div align="center">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
    <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img alt="Styled Components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  </div>
</div>

## 📋 Sobre o Projeto

O **DT Money** é uma aplicação web moderna desenvolvida para gerenciamento de transações financeiras pessoais. Com uma interface limpa e intuitiva, permite que os usuários registrem suas receitas e despesas, visualizem um resumo financeiro detalhado e busquem por transações específicas.

### ✨ Funcionalidades

- 📊 **Dashboard financeiro** com resumo de entradas, saídas e total
- ➕ **Cadastro de transações** (receitas e despesas)
- 🔍 **Sistema de busca** para filtrar transações
- 💫 **Interface responsiva** e moderna
- 🎨 **Design system** consistente com tema personalizado
- ⚡ **Performance otimizada** com React hooks avançados

## 🚀 Tecnologias Utilizadas

### Core

- **React 19.1.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida para desenvolvimento

### Estilização

- **Styled Components** - CSS-in-JS para estilização de componentes
- **Phosphor React** - Biblioteca de ícones moderna e elegante

### Formulários e Validação

- **React Hook Form** - Biblioteca para gerenciamento de formulários performática
- **Zod** - Schema validation para TypeScript
- **@hookform/resolvers** - Integração entre React Hook Form e Zod

### UI Components

- **Radix UI** - Componentes primitivos e acessíveis
  - `@radix-ui/react-dialog` - Componente de modal/dialog
  - `@radix-ui/react-radio-group` - Grupo de radio buttons

### Estado e Performance

- **use-context-selector** - Context API otimizada para performance
- **Custom Hooks** - Para lógica de negócio reutilizável

### Comunicação

- **Axios** - Cliente HTTP para requisições à API
- **JSON Server** - Mock server para desenvolvimento

### Desenvolvimento

- **ESLint** - Linter para qualidade de código
- **Prettier** - Formatador de código
- **@rocketseat/eslint-config** - Configuração ESLint da Rocketseat

## 🏗️ Arquitetura do Projeto

```
src/
├── @types/           # Declarações de tipos TypeScript
├── assets/           # Recursos estáticos (imagens, SVGs)
├── components/       # Componentes reutilizáveis
│   ├── Header/       # Cabeçalho da aplicação
│   ├── Summary/      # Cards de resumo financeiro
│   └── NewTransactionModal/ # Modal para nova transação
├── contexts/         # Contextos React para estado global
├── hooks/            # Custom hooks
├── lib/              # Configurações de bibliotecas
├── pages/            # Páginas da aplicação
│   └── Transactions/ # Página principal com tabela e busca
├── styles/           # Estilos globais e temas
└── utils/            # Funções utilitárias
```

## 🎨 Design System

O projeto utiliza um design system bem estruturado com:

### Cores

- **Tons de Cinza**: Do `gray-100` ao `gray-900` para textos e backgrounds
- **Verde**: `green-300`, `green-500`, `green-700` para receitas e ações positivas
- **Vermelho**: `red-300`, `red-500`, `red-700` para despesas
- **Amarelo**: `yellow-500` para destaques

### Tipografia

- **Roboto** como fonte principal
- Pesos variados (100-900) para hierarquia visual

## 🔧 Funcionalidades Técnicas

### Context API Otimizada

Utiliza `use-context-selector` para evitar re-renders desnecessários e melhorar a performance da aplicação.

### Validação de Formulários

Integração entre React Hook Form e Zod para validação robusta e type-safe dos dados de entrada.

### Formatação Internacionalizada

Utiliza `Intl.DateTimeFormat` e `Intl.NumberFormat` para formatação de datas e valores monetários em português brasileiro.

### Performance

- Uso de `useCallback` para memoização de funções
- Context seletivo para evitar re-renders
- Componentes otimizados com comentários sobre estratégias de memoização

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Acesse o diretório
cd dt-money

# Instale as dependências
npm install
```

### Executando o projeto

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Em outro terminal, inicie o servidor JSON (API mock)
npm run dev:server
```

A aplicação estará disponível em `http://localhost:5173` e a API em `http://localhost:3333`.

### Scripts disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run dev:server   # Inicia o JSON Server (API mock)
npm run build        # Gera build de produção
npm run lint         # Executa o linter
npm run lint:fix     # Corrige problemas do linter automaticamente
npm run preview      # Preview do build de produção
```

## 🌟 Destaques Técnicos

- **Componentização Avançada**: Componentes bem estruturados e reutilizáveis
- **Type Safety**: TypeScript em todo o projeto para maior segurança
- **Performance**: Estratégias de otimização implementadas
- **Acessibilidade**: Uso de componentes Radix UI para melhor a11y
- **Experiência do Desenvolvedor**: Configuração robusta de linting e formatação
- **Padrões Modernos**: Uso das mais recentes práticas do React

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ e muito ☕</p>
</div>
