const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A preservação do meio ambiente é uma responsabilidade apenas dos governos e grandes empresas?",
        alternativas: [
            {
                texto: "Não, pois as atitudes individuais e coletivas também contribuem para a construção de uma sociedade mais sustentável.",
                afirmacao: "A preservação ambiental depende da participação de toda a sociedade, desde pequenas escolhas do dia a dia até ações coletivas em defesa do planeta."
            },
            {
                texto: "Sim, pois somente governos e grandes empresas possuem recursos suficientes para causar mudanças significativas.",
                afirmacao: "Embora governos e empresas tenham grande responsabilidade, a participação da população também é importante para pressionar por mudanças e adotar hábitos mais sustentáveis."
            }
        ]
    },
    {
        enunciado: "O consumo excessivo pode causar impactos no meio ambiente. Qual atitude contribui para uma sociedade mais sustentável?",
        alternativas: [
            {
                texto: "Consumir de forma consciente, evitando desperdícios e priorizando produtos duráveis, reutilizáveis e necessários.",
                afirmacao: "O consumo consciente ajuda a reduzir a exploração de recursos naturais, a produção de resíduos e os impactos causados pelo descarte excessivo."
            },
            {
                texto: "Comprar o máximo possível de produtos novos para acompanhar as tendências e estimular o crescimento econômico.",
                afirmacao: "O consumo sem planejamento pode aumentar a geração de resíduos e a utilização de recursos naturais, tornando necessário repensar nossos hábitos de compra."
            }
        ]
    },
    {
        enunciado: "Como a sociedade pode contribuir para diminuir os problemas relacionados ao lixo e à poluição?",
        alternativas: [
            {
                texto: "Reduzindo o desperdício, separando materiais para reciclagem e buscando formas corretas de descarte.",
                afirmacao: "A redução e o descarte adequado dos resíduos são atitudes importantes para diminuir a poluição e promover uma relação mais responsável entre sociedade e natureza."
            },
            {
                texto: "Descartando os resíduos em qualquer local, pois a limpeza e o tratamento do lixo são responsabilidades exclusivas do poder público.",
                afirmacao: "O descarte inadequado prejudica o ambiente e a qualidade de vida, mostrando que a colaboração entre cidadãos e poder público é essencial para enfrentar esse problema."
            }
        ]
    }
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Sobre ambientalismo e sociedade...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
