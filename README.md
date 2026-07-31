# Oaken Cursos

Plataforma de cursos técnico-profissionalizantes, catálogo estilo streaming (home única com destaque + grade de cursos). Um repo, um site no GitHub Pages, um curso por subpasta.

## Estrutura

```
├── index.html       # Home da plataforma (banner + catálogo)
├── style.css        # Design da plataforma (nav, banner, cards, footer)
├── courses.js       # Catálogo — uma entrada por curso
└── oil/             # Curso "Oaken Oil" completo (site próprio, autocontido)
```

Cada curso vive na sua própria subpasta, com o próprio `index.html`, `style.css` e dados — igual eram antes como repositório separado, só que agora dentro do mesmo repo. Dentro de cada curso, todas as páginas têm uma barra fina no topo ("← OAKEN CURSOS") que volta para a home da plataforma.

## Adicionar um novo curso

1. Criar a subpasta do curso (ex: `nome-curso/`) com o site completo lá dentro.
2. Adicionar uma barra "← OAKEN CURSOS" (`<a href="../index.html">`) logo depois do `<body>` em cada página do curso, para manter a navegação de volta à plataforma.
3. Adicionar uma entrada nova em `courses.js` com `id`, `title`, `tagline`, `description`, `backdrop`, `poster`, `url` (`nome-curso/index.html`), `badge` e `stats`.
4. A home (`index.html`) lê `courses.js` automaticamente — não precisa tocar em mais nada.

## Correr localmente

Não precisa de servidor, basta abrir `index.html` no navegador. Para testar com HTTP:

```bash
python -m http.server 8000
```

---

Oaken Cursos · Centro de Formação Técnica Profissional · Luanda, Angola
