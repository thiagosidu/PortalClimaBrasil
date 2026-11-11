# Portal Clima Brasil ⛅

![Licença](https://img.shields.io/badge/Licen%C3%A7a-Acad%C3%Aamica-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)

> Sistema web responsivo para monitoramento meteorológico regional, dados térmicos, índices ambientais e conteúdo multimídia sobre o clima no Brasil.

---

## 📌 Sobre o Projeto

O **Portal Clima Brasil** é um projeto desenvolvido para a disciplina de **Desenvolvimento Front-End para Web (DFEW)** do curso de **Bacharelado em Análise e Desenvolvimento de Sistemas** da **Universidade Positivo**.

O objetivo do portal é centralizar informações meteorológicas das diferentes macro-regiões brasileiras através de uma interface intuitiva, acessível e totalmente adaptável para dispositivos móveis e desktop.

---

## 🚀 Tecnologias Utilizadas

- **HTML5 Semântico:** Estruturação das 10 páginas navegáveis e atributos de acessibilidade (`alt`, formulários).
- **CSS3:** Estilização personalizada (`estilos.css`), layout com Flexbox e regras responsivas.
- **Bootstrap 5 (v5.3.0):** Framework utilitário aplicado via CDN para responsividade em grid, cards, badges e tabelas.
- **JavaScript (Vanilla JS):** Manipulação dinâmica do DOM, validações e eventos client-side.
- **`localStorage`:** Armazenamento local no navegador para gravação contínua da cidade favorita do usuário.

> ℹ️ **Nota Acadêmica:** Em cumprimento às diretrizes do projeto, as páginas `sobre-clima.html` e `favoritos.html` foram desenvolvidas em **HTML/CSS/JS puros**, sem a utilização do framework Bootstrap.

---

## 📁 Estrutura das Páginas

O projeto conta com **10 páginas navegáveis** interligadas através do menu de navegação principal:

| Página | Descrição | Tecnologias Principais |
| :--- | :--- | :--- |
| `index.html` | Página inicial com destaques e cards informativos. | HTML, Bootstrap, CSS |
| `principais_capitais.html` | Previsão detalhada das 4 maiores capitais representadas. | HTML, Bootstrap, CSS |
| `sul-do-brasil.html` | Tabela interativa com dados térmicos e umidade do Sul. | HTML, Bootstrap, CSS |
| `nordeste.html` | Tendência climática para 15 dias na Região Nordeste. | HTML, Bootstrap, CSS |
| `qualidade-do-ar.html` | Indicadores ambientais e guias de recomendações de saúde. | HTML, Bootstrap, CSS |
| `mapa-temperatura.html` | Mapa termográfico com médias regionais do país. | HTML, Bootstrap, CSS |
| `sobre-clima.html` | Texto comparativo abrangente sobre os climas do Brasil. | **Vanilla HTML + CSS (Puro)** |
| `multimedia.html` | Reprodutor nativo de áudio (podcast) e vídeo. | HTML, Bootstrap, CSS |
| `favoritos.html` | Seleção e salvamento de cidade favorita com `localStorage`. | **Vanilla HTML + CSS + JS (Puro)** |
| `contacto.html` | Formulário de contato com validações nativas e aviso via DOM. | HTML, Bootstrap, JS |

---

## 📂 Estrutura de Diretórios

```text
portal-clima-brasil/
├── index.html
├── principais_capitais.html
├── sul-do-brasil.html
├── nordeste.html
├── qualidade-do-ar.html
├── mapa-temperatura.html
├── sobre-clima.html
├── multimedia.html
├── favoritos.html
├── contacto.html
├── README.md
├── css/
│   └── estilos.css
├── js/
│   ├── main.js
│   └── script.js
├── img/
│   └── [imagens de mapas, capitais e ícones]
├── media/
│   └── [arquivos de vídeo .mp4 e áudio .mpeg]
└── doc/
    └── Documentacao_Projeto_Clima_Brasil_ABNT.docx
```

---

## 💻 Como Executar o Projeto Localmente

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/portal-clima-brasil.git
   ```
2. **Navegar até a pasta:**
   ```bash
   cd portal-clima-brasil
   ```
3. **Executar:**
   Abra o arquivo `index.html` diretamente em seu navegador preferido (não requer servidor Node/PHP, roda totalmente offline).

---

## 👥 Desenvolvedores

Trabalho desenvolvido em dupla para a disciplina de **Desenvolvimento Front-End para Web**:

- **Rafael De Oliveira Leite**
- **Thiago Siduovski**

**Orientador:** Prof. Fabricio Olivo  
**Instituição:** Universidade Positivo (Curitiba/PR) — 2026