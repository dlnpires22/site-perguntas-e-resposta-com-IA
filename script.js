const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A IA pode subistituir completamente os seres humanos? ",
        alternativas: [
            {
                texto: "A IA tem gande capacidade para suprir os seres humanos.",
                afirmacao: "Sim, ela seria capaz de substituir os seres humanos."
            },
            {
                texto: "Tem coisas que so os seres humanos conseguem fazer.",
                afirmacao: "Não, a ia nao tem total capacidade."
            }
        ]
    },
    {
        enunciado: "A IA pode ter a criatividade de um humano ?",
        alternativas: [
            {
                texto: "A IA consegue gererar ideias baseadas em em pensamentos de humanos.",
                afirmacao: "Sim, a IA pode ter a capacidade criativa de um humano"
            },
            {
                texto: "A IA consegue possuir a capacidade deum humano",
                afirmacao: "Não, a IA nãotem a capacidade de um humano"
            }
        ]
    },
    {
        enunciado: "A IA pode tomar decisões éticas sozinha ?",
        alternativas: [
            {
                texto: "A IA pode ajudar e tomar decisões éticas",
                afirmacao: "Sim, ela pode tomar decisões éticas sozinha"
            },
            {
                texto: "A IA não tem total conhecimento sobre ética",
                afirmacao: "Não, ela não pode tomar suas proprias decisões éticas"
            }
        ]
    },
    {
        enunciado: "A IA pode resolver todos os problemas do mundo ?",
        alternativas: [
            {
                texto: "A IA é uma ferramenta poderosa para acabar com os problemas do mundo",
                afirmacao: "Sim, a IA pode resolver todos os problemas do mundo"
            },
            {
                texto: "A capacidade da IA é bem limitada",
                afirmacao: "Não, a IA não tem essa capacidade"
            }
        ]
    },
    {
        enunciado: "A IA pode aprender evoluir sem imites",
        alternativas: [
            {
                texto: "Ela pode se adaptar e evoluir",
                afirmacao: "Sim, ela pode evoluir sem limites"
            },
            {
                texto: "Sua evolução depende de novos dados de atuaizações",
                afirmacao: "Não, ela não pode se atualizar sozinha"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
