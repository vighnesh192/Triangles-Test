const inputs = document.querySelectorAll('.sideInput')
const calcBtn = document.querySelector('#calcBtn')
const output = document.querySelector('#output')

let calcBtnClick = (e) => {
    let result = 1;
    e.preventDefault();
    for(let input of inputs) {
        result *= input.value
    }
    output.innerText = `The hypotenuse is ${result/2}`
}

calcBtn.addEventListener('click', calcBtnClick)