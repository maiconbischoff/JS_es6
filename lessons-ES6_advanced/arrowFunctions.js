//funcões antigo JS
function sumOld(a, b){
    return a+b;
}
var sumOld1 = function(a, b){
    return a+b;
}

//Arrow é uma função anonima, por isso só podemos atribuir comom uma variável ou passar como parâmetro de outra função

var sum = (a, b) => a + b;  //podemos omitir o return, no caso do lado direito ser apenas uma expressão, 

var sum1 = (a, b) => {//mas se for diferente nao tem como omitir  return e deve se incluir o bloco com chaves
    var x = 10;

    if (a > b ) {
        
    }
    return a + b;
}

console.log(sum(5, 15))

//passada como parâmetro em outra function

var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('after 1000ms'); //o this se referencia ao contexto fora das chaves ao redor da arrow function
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext()