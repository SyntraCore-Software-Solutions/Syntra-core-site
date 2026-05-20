# 🎨 Ideias de Design — NovaCore's Website

## Abordagem Escolhida: **Tech Minimalista Refinada com Elegância Cibernética**

### Design Movement
**Cyberpunk Minimalism** — Fusão de estética futurista com refinamento clean. Inspirado em interfaces de alta tecnologia, mas com elegância sutil e espaçamento generoso.

### Core Principles
1. **Contraste Inteligente**: Fundo escuro (quase preto) com acentos ciano elétrico que capturam atenção sem agressividade
2. **Espaçamento Generoso**: Layouts respirados, muita margem negativa, tipografia espaçada
3. **Detalhes Brilhantes**: Bordas sutis, glows suaves, gradientes refinados que sugerem tecnologia avançada
4. **Hierarquia Clara**: Tipografia estratégica diferencia títulos, corpos e CTAs sem poluição visual

### Color Philosophy
- **Fundo Principal** (`#0A0A0F`): Preto profundo que evoca sofisticação e tecnologia
- **Accent Ciano** (`#00D4FF`): Cor elétrica que remete a neon futurista, mas usada com moderação
- **Accent Roxo** (`#6C63FF`): Complemento secundário para variação visual e destaque em elementos específicos
- **Texto Principal** (`#F0F0F5`): Branco morno para conforto visual em fundo escuro
- **Bordas Sutis** (`rgba(255,255,255,0.07)`): Divisões delicadas que estruturam sem poluir

**Intenção Emocional**: Transmitir confiança, inovação e profissionalismo. O ciano elétrico comunica velocidade e tecnologia; o roxo adiciona criatividade e sofisticação.

### Layout Paradigm
- **Hero**: Assimétrico com coluna de conteúdo à esquerda e elemento decorativo animado à direita
- **Seções**: Alternância entre layouts full-width e grid, evitando monotonia
- **Cards**: Flutuam levemente com bordas iluminadas no hover, criando profundidade
- **Divisores**: SVG animados ou linhas diagonais para quebrar linearidade

### Signature Elements
1. **Glow Sutil**: Brilho em torno de elementos interativos (cards, botões) com cor accent
2. **Grid Animado**: Fundo com padrão de pontos ou linhas que se movem lentamente
3. **Bordas Iluminadas**: Transição suave de borda cinza para ciano no hover

### Interaction Philosophy
- **Hover States**: Elevation (translateY), glow suave, mudança de cor de borda
- **Click Feedback**: Scale (0.97) com transição rápida para confirmar interação
- **Scroll Reveal**: Elementos aparecem com fade + slide up conforme o usuário rola
- **Transições**: Todas as mudanças de estado usam easing suave (ease-out 200-300ms)

### Animation
- **Entrance**: Fade in + slide up (300ms ease-out) com stagger de 30-50ms entre elementos
- **Hover**: Scale suave (1.02) + glow mais intenso (200ms ease-out)
- **Carrossel**: Scroll infinito suave, pausa no hover
- **Fundo**: Movimento lento de grid ou partículas (muito sutil, não distrai)
- **Botões**: Scale (0.97) no click, transição de cor no hover

### Typography System
- **Display/Títulos**: `Syne` (Google Fonts) — peso 700/800
  - H1: 48px (desktop), 32px (mobile), line-height 1.2
  - H2: 36px (desktop), 24px (mobile), line-height 1.3
  - H3: 24px, line-height 1.4
- **Corpo/Interface**: `DM Sans` (Google Fonts) — peso 400/500
  - Body: 16px, line-height 1.6
  - Small: 14px, line-height 1.5
  - Buttons: 14px/500, uppercase com tracking

**Hierarquia**: Títulos em Syne criam impacto; corpo em DM Sans garante legibilidade. Peso 700 em Syne para destaque, 400 em DM Sans para conforto de leitura.

---

## Justificativa da Escolha

Esta abordagem foi selecionada porque:
- **Diferencia a NovaCore's**: Não é um site corporativo genérico; é uma declaração de sofisticação tecnológica
- **Comunica Valores**: Velocidade (ciano elétrico), confiabilidade (design clean), inovação (estética futurista)
- **Escalável**: O sistema de cores e tipografia funciona em todos os tamanhos de tela
- **Memorável**: Combinação única de dark mode + ciano + roxo cria identidade visual forte
