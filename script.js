const allButtons = document.querySelectorAll("button")

allButtons.forEach((btn) => {
  btn.addEventListener('click', openList);
})

function openList(btn) {
  const ul = btn.currentTarget.nextElementSibling;

  if (ul.style.display == 'block') {
    ul.style.display = 'none'
  } else {
    ul.style.display = 'block'
  }
}
