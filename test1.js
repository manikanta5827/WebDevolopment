const counter=document.querySelector('#counter')

const inc = document.querySelector('#in')
const dec=document.querySelector('#dec')
let count=0



function Increment(){
    count++
    counter.innerText=count;
}
function Decrement(){
    count--
    counter.innerText=count
}

inc.addEventListener('click',Increment)
dec.addEventListener('click',Decrement)


