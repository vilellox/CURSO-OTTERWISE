import axios from 'axios'

import { promise } from "./promises.js"


promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error)); // maneira antiga de usar. 

const helperPromise = () => promise;



// async/await

const demoPromise = async () => {
    console.log("rodou");
    const response = await helperPromise();
    console.log(response)
    console.log("terminou")
};

demoPromise();

// precisa executar duas requisições em paralelo e só podemos seguir com a execução do código quando ambas terminarem

const allPromisses = async () => {
    const promises = [helperPromise(), helperPromise()]
    const response = await Promise.all(promises)
    console.log(response)
}

allPromisses()

// async/away com try/catch

const racePromise = async () => {
    const promises = [helperPromise(), helperPromise()]
    try {
        const response = await Promise.race(promises);
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
    
};
racePromise();

// 