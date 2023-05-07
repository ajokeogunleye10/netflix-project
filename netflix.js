const plus=document.getElementById('plus-icon');
const content=document.getElementById('content');
const x=document.getElementById('x');
const text=document.getElementById('contentone')
const plus2=document.getElementById('plus-icon2');
const content2=document.getElementById('content2');
const y=document.getElementById('x2');
const text2=document.getElementById('contentone2');
const plus3=document.getElementById('plus-icon3');
const content3=document.getElementById('content3');
const z=document.getElementById('x3');
const text3=document.getElementById('contentone3');
const plus4=document.getElementById('plus-icon4');
const content4=document.getElementById('content4');
const x4=document.getElementById('x4');
const text4=document.getElementById('contentone4');
const plus5=document.getElementById('plus-icon5');
const content5=document.getElementById('content5');
const x5=document.getElementById('x5');
const text5=document.getElementById('contentone5');
const plus6=document.getElementById('plus-icon6');
const content6=document.getElementById('content6');
const x6=document.getElementById('x6');
const text6=document.getElementById('contentone6');
// const contentone=document.getElementById('content-open') 
plus.addEventListener('click',()=>{
    content.classList.toggle('x-show');
    console.log(content.className)
    if(content.classList == "faq-top x-show"){
        plus.innerHTML = 'x'
    }else{
        plus.innerHTML = '+'
    }
})
plus2.addEventListener('click',()=>{
    content2.classList.toggle('show');
    console.log(content2.className)
    if(content2.classList == "faq-top2 show"){
        plus2.innerHTML = 'x'
    }else{
        plus2.innerHTML = '+'
    }
})
plus3.addEventListener('click',()=>{
    content3.classList.toggle('show2');
    console.log(content3.className)
    if(content3.classList == "faq-top3 show2"){
        plus3.innerHTML = 'x'
    }else{
        plus3.innerHTML = '+'
    }
})
plus4.addEventListener('click',()=>{
    content4.classList.toggle('show3');
    console.log(content4.className)
    if(content4.classList == "faq-top4 show3"){
        plus4.innerHTML = 'x'
    }else{
        plus4.innerHTML = '+'
    }
})
plus5.addEventListener('click',()=>{
    content5.classList.toggle('show4');
    console.log(content5.className)
    if(content5.classList == "faq-top5 show4"){
        plus5.innerHTML = 'x'
    }else{
        plus5.innerHTML = '+'
    }
})
plus6.addEventListener('click',()=>{
    content6.classList.toggle('show5');
    console.log(content6.className)
    if(content6.classList == "faq-top6 show5"){
        plus6.innerHTML = 'x'
    }else{
        plus6.innerHTML = '+'
    }
})



// if(content.classList == 'faq-top x-show') {
//     plus.innerHTML='-'
// } else{
//     x.innerHTML='+'
// }
// if ( document.getElementById('content').classList=="content") {
//     plus.style.display='none'
//     x.style.display='block'
// } else{
//     plus.style.display='block'
//     x.style.display='none'
// }
   

