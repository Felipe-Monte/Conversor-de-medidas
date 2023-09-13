const allButtons = document.querySelectorAll("button")

allButtons.forEach((btn) => {
  btn.addEventListener('click', openList);
})

function openList(btn) {
  const ul = btn.currentTarget.nextElementSibling;
  const preventHiddenDivResult = btn.currentTarget

  if(preventHiddenDivResult .className == "btn_change"){
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