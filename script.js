const allButtons = document.querySelectorAll("button")
const allLists = document.querySelectorAll("ul");

allButtons.forEach((btn) => {
  btn.addEventListener('click', openList);
})

function openList(btn) {
  const ul = btn.currentTarget.nextElementSibling;
  const preventHiddenDivResult = btn.currentTarget

  if(preventHiddenDivResult.className == "btn_change"){
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

allLists.forEach((ul) => {
  ul.addEventListener('click', (event) => {
    const selectedItem = event.target.textContent; // Obtém o texto do item clicado
    const button = ul.previousElementSibling; // Seleciona o botão associado à lista
    button.textContent = selectedItem; // Atualiza o texto do botão com o item selecionado
    ul.style.display = 'none'; // Oculta a lista após a seleção do item
  });
});