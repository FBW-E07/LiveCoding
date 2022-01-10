const output = document.getElementById("output")

let firstVariable = ""
let secondVariable = ""
let useFirstVariable = true
let operation

function treatPlus () {
  // parseFloat()
  firstVariable = Number(firstVariable) + Number(secondVariable)
  output.innerHTML = firstVariable
  secondVariable = ""
}



function treatEquals () {
  switch (operation) {
    case "+": return treatPlus()
  }
}

function treatEvent(event) {
  const text = event.target.textContent
  // console.log("event.target.text:", text)

  const number = parseInt(text, 10) // base 10

  if (isNaN(number)) {    
    useFirstVariable = false

    switch (text) {
      case "=": return treatEquals()
      default:
        operation = text
    }


  } else {
    if (useFirstVariable) {
      firstVariable += number // concatenate
      output.innerHTML = firstVariable
    } else {
      secondVariable += number
      output.innerHTML = secondVariable
    }
  }
}

document.body.addEventListener("click", treatEvent)