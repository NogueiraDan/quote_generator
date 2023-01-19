console.log('initial scripts')

const resultQuote = document.querySelector('.quote');
const btnGetQuote = document.querySelector('#btnGenerate');
const quoteID = document.querySelector('#quoteID')


window.onload=()=>{
    getQuote();
}

btnGetQuote.addEventListener('click', ()=>{
    getQuote()
})

function getQuote(){
    fetch('https://api.adviceslip.com/advice').then((res)=>{
    return res.json();
}).then((adviceData)=>{
    let adviceObj = adviceData.slip;
    console.log(adviceObj);
    quoteID.innerHTML = `ADVICE #${adviceObj.id}`
    resultQuote.innerHTML = `<p>'${adviceObj.advice}'</p>`;
    
}).catch(err=>console.log(err))
}