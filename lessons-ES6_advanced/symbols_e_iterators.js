//symbol é uma forma de gerar um identificador único, vc invoca como se estiver invocando uma funÇÃO, um symbol nunca é igual ao outro, da pra adicionar metapropriedades aos objetos
//pode ser usado para gerar propriedades privadas, e evitar que ela seja acessada se nao for intencionalmente
const uniqueId = Symbol();
const uniqueId2 = Symbol('hello');
const uniqueId3 = Symbol('hello');// nenhum desses symbols sao iguais, se vc verificar será false

console.log(uniqueId);

const obj = {
    [uniqueId]: 'hello'  //com isso poss gerar uma propriedade parao meu objeto que só será acessivel por quem tiver esse simbolo ou tiver o metodo seguinte
};

console.log(obj);

Object.keys(obj) //nao conseguimos pegar as propriedades do symbol, parece ser um meio de criar propriedades privadas, mas
Object.getOwnPropertySymbols(obj) // usando esse metodo conseguimos obter as propriedades de symbol do objeto, então não é uma forma de deixar a propriedade privada(ocultar), mas é uma forma de deixar claro para os outros desenvolvedores que nao se deve mexer nessa propriedade
//geralmente quando há __(undrline underline), é uma propriedade que nao se deve mecher também ou _id, ou algo do tipo

// symbols nao servem só pra isso, eles possuem uma serie de propriedades que sao chamadas de Well known symbols, 
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator](); //construir um iterador, para conseguir acessar a proriedade, e fazendo isso eu gero uma interface que será responsavel pela iteraçao do meu array
//um iterator nada mais que que ima interface para vc consumir passo a passo uma lista, uma estrutura de dados, cada vez que vc invoca o next ele vai trazendo os valores do meu array e uma segunda propriedade dizendo done false
//quando ele terminou de percorre ele traz um done true dizendo que a estrutura acabou, e traz o valor undefined, pois ele ignora o valor
console.log(it.next())

while (true) { ///percorre todos os valores do array
    let {value, done} = it.next();

    if (done){
        break;
    }
    console.log(value);
}
// com o ES6 surgiu uma forma de fazer isso mais simples, então nao preciso gerar o iterator basta fazer um FOR OF
for (let value of arr) {
    console.log(value);
}

const str = 'meu nome é Maicon'; // com string
for (let value of str) {
    console.log(value);
}


const obj = {
    values:  [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0; //indice
        return {
            next: () => {
                i++
                return {
                    value: this.value[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const arr2 = [...obj];