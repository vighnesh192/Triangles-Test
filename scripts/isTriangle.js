let angles = document.querySelectorAll('.angleInput')
let checkButton = document.querySelector('#calc-angle-button')

let output = document.querySelector('.output')

let onButtonClick = (e) => {
    e.preventDefault();
    let sumOfAngles = 0;
    for(let angle of angles) {
        sumOfAngles += Number(angle.value)
    }
    console.log(sumOfAngles)
    if(sumOfAngles === 180) {
        output.innerText = 'Yess, these angles can form a triangle!'
    }
    else {
        output.innerText = 'Noo, these angles cannot form a triangle'
    }
}

checkButton.addEventListener('click', onButtonClick)