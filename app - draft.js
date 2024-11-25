

/* 
 
  let num1=0
  let operator=null
  let num2=0
  let total=0

  if all true, step 1
  if all true besides 2, step 2
  ...
 
*/

let num1 = 0
let operator = null
let num2 = 0
let total = 0

const buttons = document.querySelectorAll('.button');
const displayElement = document.querySelector(".display")




console.log(displayElement)
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (button.getAttribute("class") === "button number") {
            if (num1 === 0) {
                num1 = event.target.innerText
                displayElement.textContent = num1
            }
            else if (num1 != 0 && operator === null) {
                num1 = num1 + button.textContent
                displayElement.textContent = num1
            }

            else if (num1 != 0 && operator != null) {
                if (num2 === 0) {
                    num2 = event.target.innerText
                    displayElement.textContent = num2
                    console.log(num2)
                }
                else if (num2 != 0) {
                    num2 = num2 + event.target.innerText
                    displayElement.textContent = num2
                }
            }


        }

        else if (button.getAttribute("class") === "button operator") {
            if (num1 != 0 && operator == null) {
                operator = event.target.innerText
            }
            console.log(`${event.target.innerText} is an operator`)
        }


        if (button.getAttribute("class") == "button equals") {
            if (operator == "+") {
                total = Number(num1) + Number(num2)
                displayElement.textContent = total
                total = 0
                num1 = 0
                num2 = 0
                operator == null
            }

            else if (operator == "*") {
                total = Number(num1) * Number(num2)
                displayElement.textContent = total
                total = 0
                num1 = 0
                num2 = 0
                operator = null
            }

            else if (operator == "-") {
                total = Number(num1) - Number(num2)
                displayElement.textContent = total
                total = 0
                num1 = 0
                num2 = 0
                operator = null
            }

            else if (operator == "/") {
                total = Number(num1) / Number(num2)
                displayElement.textContent = total
                total = 0
                num1 = 0
                num2 = 0
                operator = null
            }
        }

        if (button.getAttribute("id") == "clear") {
            total = 0
            num1 = 0
            num2 = 0
            operator = null
            displayElement.textContent = 0
        }
    })
})








