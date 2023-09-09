/* OPEN AND CLOSE BUTTON LI SELECT (mass, temperature, length) AND CLOSE LI*/
const btnSelectMeasure = document.querySelector(".btn_select_option");
const listOfMeasure = document.querySelector(".list");
const items = listOfMeasure.querySelectorAll("li");

btnSelectMeasure.addEventListener("click", () => {
  listOfMeasure.style.display = 'block'
})

items.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedItemText = item.textContent
    btnSelectMeasure.textContent = selectedItemText
    listOfMeasure.style.display = 'none'
  })
})

document.addEventListener("click", (event) => {
  if (event.target !== btnSelectMeasure && !listOfMeasure.contains(event.target)) {
    listOfMeasure.style.display = 'none'
  }
})


/* OPEN AND CLOSE BUTTON SELECT MEASURE X MEASURE AND CLOSE LI*/

