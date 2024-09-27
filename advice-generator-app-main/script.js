const iconBtn = document.querySelector('.icon-dice');
const adviceNumber = document.querySelector('.number');
const adviceText = document.querySelector('.advice_text');


iconBtn.addEventListener('click', function() {  
       
    fetch('https://api.adviceslip.com/advice')

    .then(response => {
        return response.json()
    })

    .then(data => {
        let myAdvice = data.slip

        adviceNumber.innerText = myAdvice.id
        adviceText.innerText= myAdvice.advice
    })
});