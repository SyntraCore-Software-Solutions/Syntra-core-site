# 🔐 .gitignore — O Que NÃO Vai pro Git

Este arquivo garante que dados sensíveis, arquivos temporários e dependências não sejam enviados ao repositório.

---

## 📋 Categorias Ignoradas

### 🔒 **SEGURANÇA (CRÍTICO!)**

| Arquivo | Motivo |
|---------|--------|
| `.env` | Variáveis de ambiente com senhas/chaves |
| `.env.local` | Configurações locais do desenvolvedor |
| `.env.*.local` | Configs específicas por ambiente |
| `.project-config.json` | ⚠️ **CONTÉM CREDENCIAIS AWS** — NUNCA commitar! |
| `secrets/` | Pasta para arquivos sensíveis |

**⚠️ ATENÇÃO:** Se você commitar `.project-config.json` com as credenciais AWS, o repositório fica **COMPROMETIDO**. Sempre use variáveis de ambiente.

---

### 📦 **DEPENDÊNCIAS**

| Arquivo | Motivo |
|---------|--------|
| `node_modules/` | Dependências (muito grande, ~500MB+) |
| `.pnpm-store/` | Cache do pnpm |
| `.yarn/cache/` | Cache do yarn (se usar) |

**Nota:** `pnpm-lock.yaml` deveria ser **COMMITADO** (para reproducibilidade), mas deixei comentado — você decide.

---

### 🛠️ **BUILD & OUTPUTS**

| Arquivo | Motivo |
|---------|--------|
| `dist/` | Arquivos compilados (gerado por `pnpm build`) |
| `build/` | Build output |
| `.next/` | Next.js cache |
| `out/` | Output files |

Estes são **gerados automaticamente**, não precisam versionamento.

---

### 🖥️ **IDE & EDITOR**

| Arquivo | Motivo |
|---------|--------|
| `.vscode/` | Configurações locais do VS Code |
| `.idea/` | Configurações do WebStorm/IntelliJ |
| `*.sublime-project` | Sublime Text |
| `.vim/` | Vim config |

Cada desenvolvedor usa suas próprias configurações de editor.

---

### 📝 **LOGS & DEBUG**

| Arquivo | Motivo |
|---------|--------|
| `logs/` | Arquivos de log |
| `*.log` | Todos os .log files |

Logs contêm informações temporárias e às vezes dados sensíveis.

---

### 💾 **CACHE & TEMP**

| Arquivo | Motivo |
|---------|--------|
| `.cache/` | Cache de ferramentas |
| `.turbo/` | Cache do Turbo |
| `temp/`, `tmp/` | Arquivos temporários |

Regenerados automaticamente conforme necessário.

---

### 🧪 **TESTING**

| Arquivo | Motivo |
|---------|--------|
| `coverage/` | Relatórios de coverage |
| `test-results/` | Resultados de testes |

Gerados durante CI/CD.

---

### 🖱️ **SISTEMA OPERACIONAL**

| Arquivo | Motivo |
|---------|--------|
| `.DS_Store` | macOS |
| `Thumbs.db` | Windows |
| `desktop.ini` | Windows |

Arquivos de sistema que mudam conforme você navega.

---

## ✅ O Que **DEVE** Ser Commitado

```
✅ Commitados:
├── src/              (código fonte)
├── client/           (frontend)
├── server/           (backend)
├── public/           (assets estáticos)
├── package.json      (dependências)
├── vite.config.ts    (config)
├── tsconfig.json     (config)
├── README.md         (documentação)
└── ROADMAP.md        (documentação)

❌ NÃO commitados:
├── node_modules/
├── dist/
├── .env.local
└── .vscode/
```

---

## 🔧 Como Usar

### Caso 1: Você acidentalmente commitou `.env`

```bash
# Remove do Git (mas mantém localmente)
git rm --cached .env

# Commit
git commit -m "Remove sensitive files from Git"

# Push
git push
```

### Caso 2: Adicionar mais arquivos ao ignore

Simplesmente edite `.gitignore` e faça commit:

```bash
# Edite o arquivo
echo "meu-arquivo-secreto.txt" >> .gitignore

# Commit
git add .gitignore
git commit -m "Add meu-arquivo-secreto to gitignore"
```

---

## 🚨 Boas Práticas

1. **Nunca commite `.env`** — tem variáveis sensíveis
2. **Use `.env.example`** para exemplo de variáveis (sem valores reais)
3. **Mantenha `pnpm-lock.yaml` commitado** (para reproducibilidade)
4. **Adicione `.env.local` ao seu `.gitignore`** pessoal se necessário
5. **Review antes de fazer push** — `git status` antes de `git push`

---

## 📚 Referência Rápida

| Se você quer ignorar... | Sintaxe |
|-------|---------|
| Uma pasta | `minha-pasta/` |
| Um arquivo | `arquivo.txt` |
| Todos os `.log` | `*.log` |
| Tudo exceto um arquivo | `!arquivo-importante.txt` |
| Em qualquer pasta | `**/arquivo.txt` |

---

## ❓ Dúvidas

- **"Perdi um arquivo?"** → Se foi ignorado, está seguro no seu computador, só não vai pro Git
- **"Preciso commitar um arquivo ignorado?"** → Use `git add -f arquivo.txt` (force)
- **"Como restaurar se deletei?"** → Use `git log` e `git restore`
