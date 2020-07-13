
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4];
const str = 'meu nome é Maicon'; 

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

// generators são funçoes com pausas e elas dispausam e retornam valores e mais, atraves da interece de iteraçao, value e done
//com generator basta colocar asterisco apos function, e com a palavra reservada yield, conseguimos fazer pausas
function* hello(){
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function');
    
}

//o generator se comunica  atraves da interface de iteração, se vc ispecionar o generator , ele tem um next e cada vez que invocar o next segue a diante
//usa o value e o done
const iterator = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());



//alem de pausar, posso passar valores do mundo de fora e controlar o fluxo de dados e enviar dados para que ela continue de formas diferentes


function* hello(){
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
    
}
const iterator = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside'));