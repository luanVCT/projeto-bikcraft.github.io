// menu ativo da nav

const lista = document.querySelectorAll(".nav-lista li a");
function menuAtivo(item) {
  if (location.href.includes(item.href)) {
    item.classList.add("ativo");
  }
}
lista.forEach(menuAtivo);

// ativar items do orçamento

const url = new URLSearchParams(location.search);

function ativarEscolha(parametros) {
  if (document.getElementById(parametros)) {
    document.getElementById(parametros).checked = true;
  }
}

url.forEach(ativarEscolha);

// ativar resposta faq

const perguntas = document.querySelectorAll(".faq-conteudo-item button");
const respostas = document.querySelectorAll(".faq-conteudo-item dd");

function perguntaClick(pergunta) {
  pergunta.addEventListener("click", eventoResposta);
}

function eventoResposta(event) {
  const target = event.currentTarget;
  const controls = target.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  if (resposta) {
    resposta.classList.toggle("ativo");
  }
  const expanded = resposta.classList.contains("ativo");
  console.log(expanded);
  target.setAttribute("aria-expanded", expanded);
}

perguntas.forEach(perguntaClick);

// plugin de animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
