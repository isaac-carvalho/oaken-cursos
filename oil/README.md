# Oaken Oil — Plataforma de Curso Offshore

Plataforma de formação técnica em segurança e operações offshore, com exame por módulo e certificado verificável.

**Ver ao vivo:** https://isaac-carvalho.github.io/oaken-oil/

---

## O que é

Curso técnico-profissionalizante completo de **Técnico de Segurança e Operações Offshore**, pensado para o mercado angolano:

- **17 módulos** · 527 aulas · 153 horas de conteúdo
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

O curso é uma **aplicação de página única**: todo o site vive em `index.html` e a
navegação é feita por rotas de hash, sem recarregar a página.

```
├── index.html            # Todo o site: landing, módulos, área do aluno, aulas,
│                         # laboratório, certificado e verificação
├── modulos-data.js       # Conteúdo das aulas (dados do curso)
├── exame-questions.js    # Banco de 655 questões, indexado por módulo
├── course-meta.js        # Estatísticas do curso (horas, módulos, aulas)
├── laboratorio-data.js   # Módulos e simuladores do Laboratório Virtual
└── style.css             # CSS original do certificado/verificação (referência)
```

### Rotas

| Rota | Vista |
|---|---|
| `#home` | Landing do curso |
| `#modulos` | Programa completo dos 17 módulos (acordeão) |
| `#aluno` | Área do Aluno — progresso e lista de módulos |
| `#modulo-N` | Aulas do módulo N + sidebar (laboratório e exame) |
| `#laboratorio` | Laboratório Virtual |
| `#laboratorio-N` | Laboratório Virtual já aberto no módulo N |
| `#certificado` | Certificado + anexo (só com os 17 módulos aprovados) |
| `#verificar` | Verificação do certificado (destino do QR code) |
| `#faq` `#diferenciais` `#depoimentos` | Páginas de apoio |

## Detalhes técnicos

**Site 100% estático** — sem backend, sem build step, sem dependências a instalar. Abre em qualquer navegador, funciona no GitHub Pages.

O progresso do aluno (módulos aprovados, prova em curso, tempo restante, nome no certificado) fica guardado em `localStorage`, com o prefixo `oaken_`. Isso mantém tudo simples, mas tem uma consequência que vale saber: **o progresso é por dispositivo e navegador** — quem trocar de telemóvel ou limpar os dados do browser recomeça do zero. Para um curso pago a sério, o passo seguinte seria mover esse estado para um backend com contas de utilizador.

O certificado gera um código de verificação e um QR code (via `qrcode.js` por CDN) que aponta para a própria página com os dados na query string e a rota `#verificar`. Serve para conferência visual rápida — não é uma verificação criptográfica contra um registo central.

## Correr localmente

Não precisa de servidor. Basta abrir o `index.html` no navegador.

Se preferires servir por HTTP (útil para testar o QR code com caminhos relativos):

```bash
python -m http.server 8000
```

Depois abre `http://localhost:8000`.

---

Oaken Oil · Centro de Formação Técnica Profissional · Luanda, Angola
