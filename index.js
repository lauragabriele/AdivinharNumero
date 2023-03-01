const res = document.getElementById('res')//div res do html, para colocar frase na tela 
const repete = document.getElementById('repete')//div repete do html, para colocar a frase dos números que já foram inseridos e que estão incorretos
var numbersSelect = []//definindo o numbersSelect que é um array que vai ser utilizado para guardar os valores que foram selecionados e que estão incorretos
const select = document.querySelector('.number')

function getSelectValue() {
  const valorSelect = select.value//pegando o valorSelect do select do html
  return valorSelect//dando retorno para poder utilizar fora da função
}
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numeroAleatorio = getRandomInt(arrayNumeros[0], arrayNumeros[9])
console.log(numeroAleatorio)

function options(array) {
  while (select.firstChild){
    select.removeChild(select.firstChild)
  }
  for (i = 0; i < array.length; i++) {
    const opt = document.createElement('option')
    document.body.appendChild(opt)
    opt.value = array[i]
    opt.innerHTML = array[i]
    select.appendChild(opt)
  }
}
options(arrayNumeros)

const compareNumber = function () {//VARIAVEL QUE RECEBE UMA FUNÇÃO
  const valorSelecionado=getSelectValue()
  numbersSelect.push(valorSelecionado)
  if (numbersSelect[numbersSelect.length - 1] == numeroAleatorio) {
    res.innerText = ("Deu certo")
    document.body.style.background = "green"
    repete.innerText=""
  }
  const index = arrayNumeros.indexOf(parseInt(valorSelecionado))
  arrayNumeros.splice(index, 1)
  while (numbersSelect[numbersSelect.length - 1] !== numeroAleatorio) {
    
    if (numbersSelect[numbersSelect.length - 1] > numeroAleatorio) {
      res.innerText = "Você errou! O número selecionado é MAIOR que o número sorteado."
      document.body.style.background = "red"
      repete.innerText = `Os seguintes números já foram inseridos: ${numbersSelect}. Tente com outro número!`
     
    }
    if (numbersSelect[numbersSelect.length - 1] < numeroAleatorio) {
      res.innerText = "Você errou! O número selecionado é MENOR que o número sorteado."
      document.body.style.background = "red"
      repete.innerText = `Os seguintes números já foram inseridos: ${numbersSelect}. Tente com outro número!`

      
    }
    options(arrayNumeros)
    break
  }
}
