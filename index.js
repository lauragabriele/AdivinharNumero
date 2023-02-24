function getRandomInt(min, max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min);
}

const numeroAleatorio=getRandomInt(1,10)
console.log(numeroAleatorio)