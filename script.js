import api from "./api.js"

const buttonSetUnit = document.querySelector(".btn_select_option")

const allButtons = document.querySelectorAll("button")
const allLists = document.querySelectorAll("ul");

allButtons.forEach((btn) => {
  btn.addEventListener('click', openList);
})

function openList(btn) {
  const ul = btn.currentTarget.nextElementSibling;
  const preventHiddenDivResult = btn.currentTarget

  if (preventHiddenDivResult.className == "btn_change") {
    return
  }

  if (ul.style.display == 'block') {
    ul.style.display = 'none'
  } else {
    ul.style.display = 'block'
  }
}

window.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') {
    const allUl = document.querySelectorAll("ul")
    allUl.forEach(ul => {
      ul.style.display = "none"
    })
  }
});

function measuresSelected() {
  const getUl = document.querySelector("#list_unit")
  const getUl2 = document.querySelector("#list_unit_2")

  getUl.innerHTML = `
    <li>Nanômetro</li>
    <li>Micrômetro</li>
    <li>Milímetro</li>
    <li>Centímetro</li>
    <li>Metro</li>
    <li>Quilômetro</li>
    <li>Milha</li>
    <li>Pé</li>
    <li>Polegada</li>
    <li>Jarda</li>
  `
  getUl2.innerHTML = `
    <li>Nanômetro</li>
    <li>Micrômetro</li>
    <li>Milímetro</li>
    <li>Centímetro</li>
    <li>Metro</li>
    <li>Quilômetro</li>
    <li>Milha</li>
    <li>Pé</li>
    <li>Polegada</li>
    <li>Jarda</li>
  `
  return getUl, getUl2
}

function temperatureSelected() {
  const getUl = document.querySelector("#list_unit")
  const getUl2 = document.querySelector("#list_unit_2")

  getUl.innerHTML = `
    <li>Kelvin</li>
    <li>Fahrenheit</li>
    <li>Celsius</li>
  `
  getUl2.innerHTML = `
    <li>Kelvin</li>
    <li>Fahrenheit</li>
    <li>Celsius</li>
`
  return getUl, getUl2
}

function massSelected() {
  const getUl = document.querySelector("#list_unit")
  const getUl2 = document.querySelector("#list_unit_2")

  getUl.innerHTML = `
    <li>Micrograma</li>
    <li>Miligrama</li>
    <li>Grama</li>
    <li>Quilograma</li>
    <li>Tonelada</li>
    <li>Libra</li>
    <li>Onça</li>
  `
  getUl2.innerHTML = `
    <li>Micrograma</li>
    <li>Miligrama</li>
    <li>Grama</li>
    <li>Quilograma</li>
    <li>Tonelada</li>
    <li>Libra</li>
    <li>Onça</li>
  `

  return getUl, getUl2
}

allLists.forEach((ul) => {
  ul.addEventListener('click', (event) => {
    const selectedItem = event.target.textContent; // Obtém o texto do item clicado
    const button = ul.previousElementSibling; // Seleciona o botão associado à lista
    button.textContent = selectedItem; // Atualiza o texto do botão com o item selecionado
    ul.style.display = 'none'; // Oculta a lista após a seleção do item

    if (buttonSetUnit.textContent === "Temperatura") {
      temperatureSelected()
    } else if (buttonSetUnit.textContent === "Massa") {
      massSelected()
    } else if (buttonSetUnit.textContent === "Comprimento") {
      measuresSelected()
    }
  });
});

