//Obter as tags HTML
var tela = document.querySelector('#tela');
var botoes = document.querySelectorAll('.tecla');
var novoNum = true;

const attTela = (texto) => {
        if (novoNum) {
            tela.innerHTML = "";
            novoNum = false
        }

    tela.innerHTML += texto;
}

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

function clique() { //Aqui eu optei por função ao invés de arrow apenas para praticar com os dois e deixei as arrow acima por organização
    const inserir = (evento) => attTela(evento.target.textContent);
    botoes.forEach (btn => btn.addEventListener('click', inserir));
    
    
}

function limpar() {
    tela.textContent = "";
}

function corrige() {
    let conteudo = tela.innerHTML
    conteudo = conteudo.slice(0, -1)
    tela.innerHTML = conteudo
}



clique();