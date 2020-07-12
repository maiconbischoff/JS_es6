//para usar um numero indefinido de argumentos em uma função, sem que precise saber a quantidade de argumentos.

//jeito antigo usava-se a palavra reservada do js, arguments, 
function sum(a, b){
    var value = 0 
    for (var i = 0; i < arguments.length; i++ ){
        value += arguments[1];
    }
    return value;
}

//maneira com ES5 usando rest operator escreve-se com is ..., na frente dos tres pontos vc define um valor para sua variavel

function exemple(...args) {
    console.log(args); //o rest trasformou o args(todos os parametros no caso) em um array, trazendo os métodos de array para poder manipular os argumentos
    console.log(arguments); //enquanto arguments é um object arguments nao existe em arrow functions
}
function sumEs(...args) {
    return args.reduce((acc, value) => acc +  value, 0); //escrevendo a função quer será responsavel, e o valor inicial (zero)
}
console.log(sumEs(3,3,3,3,4))

//outro ponto interssante sobre o rest operator é que ele pode ser utilizado para pegar argumentos restantes, e transformar em um array

const sum1 = (a, b, ...rest) => {
    console.log(a, b, rest)
};
console.log(sum1(5,3,3,3,4))


//spread operator, se escreve exatamente da mesma forma que o rest operator, porém o seu funcionamento, é ao contrario e funciona de maneira diferente
//pois ele pega todos os itens de um array e trasnforma em parametro para uma segunda funçao, o contrario do rest operator

//sem spread operator
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum2 = (...rest) => {
    return multiply.apply(undefined, rest);
};
console.log(sum2(5,5,5,2,3))

//com spread operator passando uma lista com parametros para outra função

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum2 = (...rest) => {
    return multiply(...rest);//rest é spread operator nesse caso
};
console.log(sum2(5,5,5,2,3))

// o spread operator nao se limita a listas(arrays), pode ser usado em strings, literarl objects  e objects iteraveis, 
//pois ele tem a funcçao de quebrar os itens e passar para algum lugar EX:

const str = 'uma frase qualquer'; 
const arr = [1, 2, 3, 4];

function logArgs(...args){
    console.log(args)
}
logArgs(...str); // aplicando o spread na string
logArgs(...arr); // aplicando o spread na string

//concatenar array
const arr2 = [5, 6, 7, ...arr];

const arr3 = [...arr2, ...arr, 0 , 0, 0];


const obj = {
    test: 123
}

const obj2 = {
    ...obj, //em objetos literais vc so pode utilizar o spread para constuir novos objetos, nao pode para por exemplo construir um novo array
    test2: 'hello'
}

// a ordem do sprad altera o resultado
const obj3 = {
    test3: 123
}

const obj4 = {
    ...obj3, //em objetos literais vc so pode utilizar o spread para constuir novos objetos, nao pode para por exemplo construir um novo array
    test4: 456
}

objMerged = {
    ...obj3,
    ...obj4
}
 console.log(objMerged);



// O método reduce()executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

// {{IncorporarExemploInterativo("pages/js/array-reduce.html")}}
// A função reducer é alimentada por quatro parâmetros:

// Acumulador (acc)
// Valor Atual (cur)
// Index Atual (idx)
// Array original (src)
// O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.