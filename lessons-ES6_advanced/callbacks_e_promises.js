//callbacks

function doSomething(callback){
    setTimeout(function() {
        //did something
        callback('first data');
    }, 1000 );
}

function doOtherThing(callback){
    setTimeout(function() {
        //did other thing
        callback('second data');
    }, 1000 );
}

function doAll() {
    try{
        doSomething(function(data) {
            var processedData = data.split('');
            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function(){
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch {
                        //handle error
                    }
                })
            } catch {
                //handle error

            }
        })
    } catch {
        //handle error

    }
}

doAll()


//promises
//esse codigo foi ficando cada vez masi complicado e dificil de lidar, fico um callback hell
// programaçao assincrona
//rescrevendo esse codigo usando promisses usando ES6, precisamos simplesmente invocar o construtor de uma promise, passando para ela uma funçao 
// e essa função vai receber como argumento o resolved e o reject, e  dai passamos o que temos que fazer e ao terminar chamamos o resolved, e caso de um erro  invocamos o reject

const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('first data');
    }, 1000 );
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('second data');
    }, 1000 );
});
console.log(doOtherThingPromise) //assim fica em pending

doSomethingPromise.then(data => console.log(data)) //para que a gente consiga executar o console log da maneira correta temos que colocar um then dai a gente recebe os dados caso a promise complete com sucesso

//uma promise pode ter tres status  pending, quando esta pendente(em execuçao), fulfilled é quando terminou de executar e rejected caso aconteca algum erro
//promisses permitem que vc encadeie uma na outra
doSomethingPromise.then(data => {
    console.log(data.split(''));
    return doOtherThingPromise;
}).then(data2 => console.log(data2.split(''))).catch('Ops', error);
