//Obter as tags HTML
var tela = document.querySelector('#tela');
var botoes = document.querySelectorAll('.tecla');
var novoNum = true;

//Função para escrever na tela
const attTela = (texto) => {
        if (novoNum) {
            tela.innerHTML = "";
            novoNum = false
        }

    tela.innerHTML += texto;
}

//Função para obter o resultado da expressão
const resultado = () => {
    novoNum = true;
    let valor = tela.innerHTML;
    let equacao = valor

    if (equacao) {
        try {
            tela.innerHTML = eval(equacao);
            
        } catch (error) {
            tela.innerHTML = "ERRO"
        }
    }
}

//Aqui eu optei por função ao invés de arrow apenas para praticar com os dois e deixei as arrow acima por organização

//Clicar nos botões
function clique() { 
    const inserir = (evento) => attTela(evento.target.textContent);
    botoes.forEach (btn => btn.addEventListener('click', inserir));
}

//Digitar
function escrever() {
    
    document.addEventListener("keydown", digitar = (event) => {

        if (event.which >= 48 && event.which <= 57) {
            attTela(event.key);
        } else if (event.which >= 96 && event.which >= 96 && event.which <= 105) {
            attTela(event.key)
        } else if (event.which >= 107 && event.which <= 111) {
            attTela(event.key)
        }

        switch(event.which) {
            case 13:
                resultado();
                break
            case 8:
                corrige();
                break
            case 189:
                attTela("-");
                break
            case 193:
                attTela("/");
                break
            case 190:
                attTela(".");
                break;
            case 194:
                attTela(".")
                break
        }
        console.log(event.which)
    })
    console.log("Teste")
    
}

//Limpar todos os dados
function limpar() {
    tela.textContent = "";
}

//Limpar a ultima entrada de dados
function corrige() {
    let conteudo = tela.innerHTML
    conteudo = conteudo.slice(0, -1)
    tela.innerHTML = conteudo
}

//Chamar as funções de escrever e clicar nos botões
escrever();
clique();