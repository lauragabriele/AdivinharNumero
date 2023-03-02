const response = document.getElementById('response')
const incorrectNumbers = document.getElementById('incorrectNumbers')
var numbersSelect = []
const select = document.querySelector('.number')
function getSelectValue() {
  const valorSelect = select.value
  console.log(valorSelect)
  return valorSelect
}
arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numeroAleatorio = Math.floor(Math.random() * 10)
console.log(numeroAleatorio)

function options(array) {
  while (select.firstChild) {
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
const compareNumber = function () {
  const valorSelecionado=getSelectValue()
  numbersSelect.push(valorSelecionado)
  if (numbersSelect[numbersSelect.length - 1] == numeroAleatorio) {
    response.innerText = ("Deu certo")
    document.body.style.background = "green"
    incorrectNumbers.innerText = ""
  }
  const index = arrayNumeros.indexOf(parseInt(valorSelecionado))
  arrayNumeros.splice(index, 1)
  while (numbersSelect[numbersSelect.length - 1] !== numeroAleatorio) {

    if (numbersSelect[numbersSelect.length - 1] > numeroAleatorio) {
      response.innerText = "Você errou! O número selecionado é MAIOR que o número sorteado."
      document.body.style.background = "red"
      incorrectNumbers.innerText = `Os seguintes números já foram inseridos: ${numbersSelect}. Tente com outro número!`

    }
    if (numbersSelect[numbersSelect.length - 1] < numeroAleatorio) {
      response.innerText = "Você errou! O número selecionado é MENOR que o número sorteado."
      document.body.style.background = "red"
      incorrectNumbers.innerText = `Os seguintes números já foram inseridos: ${numbersSelect}. Tente com outro número!`


    }
    options(arrayNumeros)
    break
  }
}