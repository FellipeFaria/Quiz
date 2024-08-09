const bancoDeDados = [
    {
        pergunta: "Quem é o dono do recorde de mais gols oficais em um ano?",
        a: "Pelé",
        b: "Cristiano Ronaldo",
        c: "Romário",
        d: "Lionel Messi",
        res: "d"
    },
    {
        pergunta: "Quantas copas do mundo tem o Brasil?",
        a: "3",
        b: "1",
        c: "5",
        d: "4",
        res: "c"
    },
    {
        pergunta: "Quem é o maior campeão da Conmebal Libertadores?",
        a: "Indipendiente",
        b: "Boca Juniors",
        c: "São Paulo",
        d: "Corinthians",
        res: "a"
    },
    {
        pergunta: "Qual foi o pais que inventou o futebol?",
        a: "Inglaterra",
        b: "Brasil",
        c: "Espanha",
        d: "Argentina",
        res: "a"
    },
    {
        pergunta: "Quem ganhou a copa de 1930?",
        a: "Inglaterra",
        b: "Brasil",
        c: "Espanha",
        d: "Uruguai",
        res: "d"
    }
];

const qAtualSpan = document.getElementById("q-atual");
const qTotalSpan = document.getElementById("q-total");
const perguntaLabel = document.getElementById("pergunta");
const alternativas = document.querySelectorAll("input.resposta");

const altA = document.getElementById("a-label");
const altB = document.getElementById("b-label");
const altC = document.getElementById("c-label");
const altD = document.getElementById("d-label");

let questaoAtual = 0;
const questaoTotal = bancoDeDados.length;
let acertos = 0;

function loadQuiz() {
    perguntaLabel.innerHTML = bancoDeDados[questaoAtual].pergunta;
    altA.innerHTML = bancoDeDados[questaoAtual].a;
    altB.innerHTML = bancoDeDados[questaoAtual].b;
    altC.innerHTML = bancoDeDados[questaoAtual].c;
    altD.innerHTML = bancoDeDados[questaoAtual].d;
    qAtualSpan.innerHTML = questaoAtual + 1;
    qTotalSpan.innerHTML = questaoTotal;
}

btnEnviar.addEventListener('click', () => {
    alternativas.forEach(alt => {
        if (alt.checked) {
            const altId = alt.id;  
            if (altId === bancoDeDados[questaoAtual].res) {
                acertos++;
            }
            questaoAtual++;
            if (questaoAtual < questaoTotal) {
                loadQuiz();
            } else {
                alert(`Você acertou ${acertos} de ${questaoTotal} questões`);
                questaoAtual = 0;
                acertos = 0;
                loadQuiz();
            }
        }
    });
});

loadQuiz();
