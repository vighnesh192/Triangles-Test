const radioInputs = document.querySelectorAll('.radios')
const submitBtn = document.querySelector('#quiz-submit-btn')
const result = document.querySelector('#result')

let score = 0
let answers = {
    question1: {
        answer: '90°',
        score: 0
    },
    question2: {
        answer: 'right angled',
        score: 0
    } 
}

function onRadioClick() {
    if((this.value === answers[this.name].answer) && (answers[this.name].score === 0)) {
        answers[this.name].score++
        score++
    }
    else if((this.value != answers[this.name].answer) && (answers[this.name].score > 0)) {
        answers[this.name].score--
        score--
    }
}

radioInputs.forEach((input) => {
    input.addEventListener("change", onRadioClick)
})

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
    result.innerText = `Your score is ${score}`
    console.log(score);
})