# 📁 Estrutura do Projeto NovaCore's

## Organização Principal

```
SyntraCore-site/
├── client/                      # 🎨 Frontend (React + Vite)
│   ├── public/                  # Assets estáticos pequenos (favicon, robots.txt)
│   ├── index.html              # HTML principal
│   └── src/
│       ├── pages/              # 📄 Páginas (Home.tsx, NotFound.tsx)
│       ├── components/
│       │   ├── layout/         # Layout (Header.tsx, Footer.tsx)
│       │   ├── sections/       # Seções (Hero, Services, Portfolio, etc)
│       │   ├── ui/             # shadcn/ui components
│       │   ├── ErrorBoundary.tsx
│       │   └── AuthDialog.tsx
│       ├── contexts/           # React Context (ThemeContext)
│       ├── hooks/              # Custom hooks (useMobile)
│       ├── lib/                # Utilitários e helpers
│       ├── data/               # Dados hardcoded (technologies, portfolio, etc)
│       ├── App.tsx             # Router principal
│       ├── main.tsx            # Entry point
│       └── index.css           # Estilos globais + design tokens
│
├── server/                      # ⚙️ Backend (Express - estático)
│   └── index.ts                # Servidor que serve arquivos estáticos
│
├── shared/                      # 🔗 Código compartilhado
│   └── const.ts                # Constantes
│
├── docs/                        # 📚 Documentação
│   ├── README.md               # Índice da documentação
│   └── DESIGN_GUIDE.md         # Guia de design (cores, tipografia, animações)
│
├── patches/                     # 🔧 Patches de dependências
│   └── wouter@3.7.1.patch
│
├── .gitignore                   # Git ignore
├── .prettierignore              # Prettier ignore
├── .prettierrc                  # Prettier config
├── .project-config.json         # Config do projeto
├── components.json              # shadcn/ui config
├── package.json                 # Dependências
├── pnpm-lock.yaml              # Lock file
├── tsconfig.json               # TypeScript config
├── tsconfig.node.json          # TypeScript config (Node)
├── vite.config.ts              # Vite config
└── README.md                    # Documentação principal
```

---

## 🎯 O Que Cada Pasta Faz

| Pasta | Responsabilidade |
|-------|-----------------|
| `client/src/pages/` | Páginas da aplicação (rotas principais) |
| `client/src/components/layout/` | Header, Footer (layouts principais) |
| `client/src/components/sections/` | Seções da página (Hero, Services, Portfolio, etc) |
| `client/src/components/ui/` | Componentes base (Button, Card, Dialog, etc) |
| `client/src/data/` | Dados estáticos (não usa BD) |
| `server/` | Backend Express (serve arquivos estáticos) |
| `docs/` | Documentação do projeto |

---

## 🚀 Tecnologias

- **Frontend**: React 19 + Vite + Tailwind CSS 4
- **UI Components**: shadcn/ui (mais de 60 componentes)
- **Animações**: Framer Motion
- **Routing**: Wouter
- **Tipagem**: TypeScript
- **Backend**: Express (apenas serve arquivos estáticos)
- **Banco de Dados**: ❌ NÃO USA (é um site estático)

---

## 📝 Comandos Importantes

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview

# Verificar tipos TypeScript
pnpm check

# Formatar código
pnpm format
```

---

## 🎨 Próximas Modificações

Quando você quiser fazer mudanças:

1. **Adicionar novas seções?** → Crie em `client/src/components/sections/`
2. **Mudar cores/design?** → Edite `client/src/index.css` e `docs/DESIGN_GUIDE.md`
3. **Adicionar página?** → Crie em `client/src/pages/` e registre no `App.tsx`
4. **Adicionar componente reutilizável?** → Coloque em `client/src/components/`
5. **Mudar dados (tecnologias, portfolio)?** → Edite `client/src/data/`

---

## ✅ Status do Projeto

- ✅ Header criado (Header.tsx)
- ✅ Footer criado
- ✅ Todas as seções criadas
- ✅ Componentes UI configurados
- ✅ Design system implementado
- ✅ Responsivo (mobile + desktop)
- ⏳ Pronto para customizações finais
