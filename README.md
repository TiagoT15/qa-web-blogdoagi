# QA Web Blog do Agi - Cypress E2E

Automação E2E para validação da funcionalidade de busca no Blog do Agi usando Cypress + TypeScript.

## Instalação

### Pré-requisitos
- Node.js 18+
- npm

### Setup
```bash
# Clone o repositório
git clone <[repository-url](https://github.com/TiagoT15/qa-web-blogdoagi-cypress)>
cd qa-web-blogdoagi-cypress

# Instale dependências
npm install
```

## Execução

### Scripts Disponíveis
```bash
# Executar testes headless
npm run test:headless

# Executar testes com interface
npm run test:headed

# Mesclar relatórios JSON
npm run report:merge

# Gerar relatório HTML
npm run report:html

# Execução completa com relatórios
npm run test:full
```

### Visualizar Relatórios

**Linux/macOS:**
```bash
open cypress/reports/html/index.html
```

**Windows:**
```cmd
start cypress/reports/html/index.html
```

## Estrutura

```
cypress/
├── e2e/search/          # Cenários de busca
├── pages/               # Page Objects
├── fixtures/            # Dados de teste
└── reports/             # Relatórios gerados
```

## Cenários Implementados

1. **Busca válida** - Termo válido com navegação
2. **Sem resultados** - Termo inválido com validação
3. **Normalização** - Acentos e maiúsculas
4. **Persistência** - URL e reload

## Critérios de Aceitação Atendidos

✅ Automação da busca no Blog do Agi (https://blog.agibank.com.br)  
✅ Uso de seletores semânticos (aria-label, id)  
✅ Cypress + TypeScript + Chai  
✅ Mochawesome com merge JSON → HTML  
✅ Page Objects pattern  
✅ 2+ cenários obrigatórios + bônus  
✅ Execução multiplataforma (Linux/Windows/macOS)  
✅ CI/CD com GitHub Actions  
✅ Observabilidade com cy.intercept()  
✅ Filtro de exceções conhecidas do site  

## Pontos de Melhoria Observados

**Técnicos:**
- Seletores mais robustos para elementos dinâmicos
- Tratamento de estados de loading/animações
- Validação de acessibilidade (ARIA, contraste)
- Testes de performance (Core Web Vitals)

**UX/Funcionalidade:**
- Mensagens de erro mais descritivas
- Feedback visual durante busca
- Suporte a busca por categorias/tags
- Histórico de buscas recentes
