//fetch é uma nova api que tem o mesmo intuito do xmlhttpRequest, mas ela trabalha de uma maneira difentere utilizando promises
fetch('/data.json').then(responseStream => { //retorna uma promise
    console.log(responseStream);
})

// para retonar o dado devemos usar o stram e processar, blob, json .... o strea por ter o seu procesamento de forma assincrona ele retorna uma promise e dai uso uma then e pego os dados
fetch('/data.json').then(responseStream => { 
    responseStream.json().then(data => {
        console.log(data)
    });
});
//ou retornar de maneira mais legivel
fetch('/data.json')
    .then(responseStream => {responseStream.json()
    .then(data => {
        console.log(data)
    });
});
//se houver erro de rede, e somente se houver erro de rede o erro sera pego no catch
fetch('http://localhost:8081/data.json')
    .then(responseStream => {responseStream.json()
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log('Erro: ', err);
    })
});
//para tratar o erro  generico
fetch('http://localhost:8081/data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data)
    })    
    .catch(err => {
        console.log('Error: ', err);
    });

//Async / Await é uma forma d criar promises mais simples e lidar com promises dentro de promises.... usar a palavra async antes da funcao ou arrow function
//retorna uma promise ja resolvida 

const simpleFunc = async () => {
    throw new Error('Oh no!');
    return 12345;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

// a forma correta e usar async com await para aguardar a resoluçao da promise e retornar no data
const asyncTimer = () => 
    new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc = async () => {
   const data = await asyncTimer();
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });


//eventEmitter é exclusivo do node para lidar com programaçao assincrona, para usar o eventemitter tem que fazer o import do events 

const EventEmitter = require('events');

class users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000)
    }
}

const users = new users();

users.on('User logged', data => {
    console.log(data);
});
users.userLogged({ user: 'Maicon Bischoff' });
users.userLogged({ user: 'John Doe' });