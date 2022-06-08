const tela = document.querySelector('#tela');
const numeros = document.querySelectorAll('.num');
const operadores = document.querySelectorAll('.operacao');
const igualBtn = document.querySelector('#igual');
const deletaBtn = document.querySelector('#CE'); 
const limpaBtn = document.querySelector('#C'); 

let novoNum = true;
let operador;
let numAnterior

const attTela = (texto) => {
    tela.textContent += texto
}
const inserirNum = (evento) => attTela(evento.target.textContent);
numeros.forEach (num => num.addEventListener('click', inserirNum));

const inserirOp = (evento) =>attTela(evento.target.textContent);
operadores.forEach (op => op.addEventListener('click', inserirOp))

const calcular = () => {
    const expressao = tela.textContent;
    expressao = Number(expressao);
}

const resultado = (calcular) => calcular(calcular.target.textContent);
igualBtn.forEach (igual => igual.addEventListener('click', calcular));

console.log(resultado)

/* const attTela = (texto) => {
    if (novoNum) {
        tela.textContent = texto;
        novoNum = false
    } else {
        tela.textContent += texto;
    }
}
const inserirNum = (evento) => attTela(evento.target.textContent);
numeros.forEach (num => num.addEventListener('click', inserirNum));

const selecionarOperadores = (evento) => {
    if (!novoNum) {
        calcular();
        novoNum = true;
        operador = evento.target.textContent;
        numAnterior = tela.textContent;

        console.log(operador)
        console.log(numAnterior)
    }
}
operadores.forEach (num => num.addEventListener('click', selecionarOperadores));
*/
console.log(tela)
console.log(numeros)
console.log(operadores)
console.log(igualBtn)
console.log(deletaBtn)
console.log(limpaBtn)
console.log(novoNum)