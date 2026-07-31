# Oaken Oil — Plataforma de Curso Offshore

Plataforma de formação técnica em segurança e operações offshore, com exame por módulo e certificado verificável.

**Ver ao vivo:** https://isaac-carvalho.github.io/oaken-oil/

---

## O que é

Curso técnico-profissionalizante completo de **Técnico de Segurança e Operações Offshore**, pensado para o mercado angolano:

- **17 módulos** · 340 aulas · 153 horas de conteúdo
- **655 questões** no banco, distribuídas por módulo
- Exame por módulo com desbloqueio sequencial
- Certificado de conclusão com código QR de verificação

## Como funciona o exame

Cada módulo tem a sua própria prova, e é preciso passar numa para desbloquear a seguinte:

| Regra | Valor |
|---|---|
| Questões por prova | 30, sorteadas do banco daquele módulo |
| Tempo limite | 50 minutos, com contagem decrescente |
| Nota mínima | 70% (21 de 30) |
| Ao esgotar o tempo | Entrega automática, com as respostas certas reveladas |
| Ao reprovar | Pode repetir, com sorteio novo de questões |

A ordem das questões **e das opções** é embaralhada a cada tentativa. Isso é de propósito: impede decorar a posição da resposta errada entre uma tentativa e outra, sem precisar de manter várias versões fixas da mesma prova.

Depois de passar no módulo 17, o aluno vai para o certificado.

## Estrutura

```
├── index.html            # Página principal do curso
├── modulos.html          # Programa completo dos 17 módulos
├── exame.html            # Área do Aluno — os 17 exames
├── certificado.html      # Certificado + anexo com o programa estudado
├── verificar.html        # Página de verificação (destino do QR code)
├── diferenciais.html
├── depoimentos.html
├── faq.html
├── modulos-data.js       # Conteúdo das aulas (dados do curso)
├── exame-questions.js    # Banco de 655 questões, indexado por módulo
├── course-meta.js        # Estatísticas do curso (horas, módulos, aulas)
└── style.css             # Estilos partilhados pelo certificado/verificação
```

## Detalhes técnicos

**Site 100% estático** — sem backend, sem build step, sem dependências a instalar. Abre em qualquer navegador, funciona no GitHub Pages.

O progresso do aluno (módulos aprovados, prova em curso, tempo restante, nome no certificado) fica guardado em `localStorage`, com o prefixo `oaken_`. Isso mantém tudo simples, mas tem uma consequência que vale saber: **o progresso é por dispositivo e navegador** — quem trocar de telemóvel ou limpar os dados do browser recomeça do zero. Para um curso pago a sério, o passo seguinte seria mover esse estado para um backend com contas de utilizador.

O certificado gera um código de verificação e um QR code (via `qrcode.js` por CDN) que aponta para `verificar.html` com os dados na query string. Serve para conferência visual rápida — não é uma verificação criptográfica contra um registo central.

## Correr localmente

Não precisa de servidor. Basta abrir o `index.html` no navegador.

Se preferires servir por HTTP (útil para testar o QR code com caminhos relativos):

```bash
python -m http.server 8000
```

Depois abre `http://localhost:8000`.

---

Oaken Oil · Centro de Formação Técnica Profissional · Luanda, Angola
