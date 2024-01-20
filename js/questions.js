(function(){
    const titleQuestion= [...document.querySelectorAll('.questions__title')];
console.log(titleQuestion);
titleQuestion.forEach(question =>{

question.addEventListener('click', ()=>{
    let height = 0;
    let answer = question.nextElementSibling;
    let addPadding = question.parentElement.parentElement;
    addPadding.classList.toggle('questions__padding--add');
    question.children[0].classList.toggle('question__arrow--rotate');
        if(answer.clienteHeight===0){
        height = answer.scrollHeight;
        }
    answer.style.height = `${height}px`;
        });
    });
})();