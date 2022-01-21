const list = document.getElementById("destinations")
list.style = "color: red;"

const button = document.querySelector("button")
const feedback = document.querySelector(".feedback")

let visible = true
function treatToggleClick(event) {
  if (event.target.tagName !== "BUTTON") {
    return
  }

  const buttonText = event.target.innerHTML
  console.log("event.target.innerHTML:", buttonText)

  if (buttonText !== "Toggle") {
    return
  }
 
  visible = !visible
  if (visible) {
    list.classList.remove("hidden")
  } else {
    list.classList.add("hidden")
    feedback.innerHTML = ""
    removeHighlight()
  }

 
}

document.body.addEventListener("click", treatToggleClick)


list.addEventListener("click", treatListClick)


function removeHighlight() {
  const alreadySelected = list.querySelector(".selected")
  if (alreadySelected) {
    alreadySelected.classList.remove("selected")
  }
}

function treatListClick(event) {
  // console.log("event.target:", event.target.innerHTML, event.target.tagName)
  console.log("event:", event)
  const li = event.target
  if (li.tagName !== "LI") {
    return
  }

  removeHighlight()
  li.classList.add("selected")

  const text = li.innerHTML
  const message = `You clicked on ${text}.`
  feedback.innerHTML = message
}