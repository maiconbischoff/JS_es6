// var arr = ['Apple', 'Banana', 'Orange'];
// var apple = arr[0];
// var banana = arr[1];
// var orange = arr[2];


// //Destructuring Assignment
// var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];
//console.log(apple, apple2)

//com arrays multidimensionais(matrizes)
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']]; //array dento do array
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring Assignment
var [apple2, banana2, orange2,  [tomato2]] = ['Apple', 'Banana', 'Orange',  ['Tomato']];

console.log(tomato, tomato2)


var arr2 = ['Apple', 'Orange'];
var obj = {
    name: 'maicon'
};

//Assignment com objetos abaixo
//var name = obj.name;
var [apple3] = arr2;
//Destructuring Assignment com objetos
var {name} = obj;
var {name: name2} = obj; // aqui ja está atribuindo ao name2
name2 = 'miguel';
console.log(name);

//destructuring com objeto dentro de objeto

var obj3 = {
    name: 'maicon',
    props: {
        age: 36
    }
};

//forma antiga de pegar a idade e atribuir a uma variavel
var age = obj3.props.age;

//forma utilizando destructuring de pegar a idade e atribuir a uma variavel
var {props: {age}} = obj3;
//ou de forma nested aninhada
var {
    props: {age: age2}
} = obj3;

console.log(age);

// usando com objeto com array dentro

var obj4 = {
    name: 'maicon',
    props: {
        age: 36,
        favoriteColors: ['black', 'blue']
    }
};

//forma antiga de pegar a idade e atribuir a uma variavel
var age = obj4.props.age;
var color1 = obj4.props.favoriteColors[0];
var color2 = obj4.props.favoriteColors[1];
//forma utilizando destructuring de pegar a idade e atribuir a uma variavel
var {props: {age}} = obj4;
//ou de forma nested aninhada
var {
    props: {age: age2, favoriteColors: [color1, color2]}
} = obj4;

console.log(age);
console.log(color1);


var arr4 = [{name: 'Apple', type: 'fruit'}];

var fruit1 = arr[0].name;
// ou com destructuring

var [{name: fruit1}] = arr;

console.log(fruit1);

//alem de definir variaveis podemos usar destructurin em uma lista de argumentos de uma função

function sum(arr){
    return arr[0] + arr[1]
}

console.log(sum([5, 5]));

//ou com destructuring 

function sum([a, b] = []){
    return a + b;
}

console.log(sum([5, 5]));

//usando destructuring junto com default values
function sum([a, b] = [10, 5]){
    return a + b;
}

console.log(sum([]));// se nao passar nada ele pega o valor default
console.log(sum([5, 5]));// se passar argumentos ele soma os args

//ou também 
function sum({a, b}){
    return a + b;
}

console.log(sum({a: 5, b: 5}));