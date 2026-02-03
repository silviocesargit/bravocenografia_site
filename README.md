# Bravo Cenografia Site

Site para Bravo Cenografia usando Next.js, TypeScript, Tailwind CSS, shadcn/ui e Framer Motion.

## Estrutura do Projeto

- `src/app/` - Páginas do Next.js App Router
- `src/components/` - Componentes React
  - `ui/` - Componentes shadcn/ui
  - `layout/` - Header, Footer, etc.
  - `sections/` - Seções da página
  - `animations/` - Wrappers animados
- `src/lib/` - Utilitários e constantes
- `src/styles/` - Estilos globais
- `public/` - Assets estáticos

## Instalação

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Configuração shadcn/ui

Para adicionar componentes shadcn/ui:

```bash
npx shadcn-ui@latest add button
```

## Paleta de Cores

- Fundo principal: #0E0F12
- Fundo secundário: #0F1F2E
- Texto principal: #F2F2F2
- Texto secundário: #9CA3AF
- Destaque: #C9A24D

## Tipografia

- Títulos: Montserrat
- Textos: Inter