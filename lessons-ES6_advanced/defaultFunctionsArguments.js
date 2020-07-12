function multiply(a = 2, b = 1){ //como o zero é false em js, se passar um zero da retorno de NaN, com o ES6, podemos atribuir um numero ja , se o segundo parametro for omitido, caso passe o segundo parametro, ele assume o valor do mesmo
    return a * b;
}
console.log(multiply(undefined, 5))
console.log(multiply(5,undefined))
console.log(multiply(5, 5))