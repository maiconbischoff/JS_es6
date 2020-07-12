//jeito classico de declarar objetos literais
var prop2 = 'texto2';
var obj ={
    prop1: 'texto', // atribuiçao de valor para propriedades 
    prop2: prop2 // outra maneira de atribuir, pode se tambem no ES6 omitir o segundo termo(prop2) no short range do ES se tiver o mesmo valor
};

function method1(){
    console.log('method called');
}
var obj ={
    method1: method1// atribuiçao de valor para metodos, pode se tambem no ES6 omitir o segundo termo(prop2) no short range do ES se tiver o mesmo valor   
};

//outra forma

var obj ={
    sum: function sum(a, b){
        return a + b;
    } 
};
//outra forma

var obj ={
    sum1(a, b){
        return a + b;
    } 
};
console.log(obj);