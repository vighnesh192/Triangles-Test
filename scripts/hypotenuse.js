const inputs = document.querySelectorAll('.sideInput')
const calcBtn = document.querySelector('#hypBtn')
const output = document.querySelector('.output')

let calcBtnClick = (e) => {
    let result = 0;
    e.preventDefault();
    for(let input of inputs) {
        result += Math.pow(input.value, 2)
    }
    output.innerText = `The hypotenuse is ${Math.sqrt(result).toFixed(2)}`
}

calcBtn.addEventListener('click', calcBtnClick)