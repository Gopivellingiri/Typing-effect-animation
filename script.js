const text = document.querySelector('.sec-text');

const texts = ['Freelancer', 'Graphic Designer', 'Learner']
let index = 0;

function textLoad()  {
    text.textContent = texts[index]
    index = (index + 1) % texts.length
}

textLoad()
setInterval(textLoad, 4000)