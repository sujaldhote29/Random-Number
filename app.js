let btn = document.querySelector("button");
let skull = document.querySelector("body");

btn.addEventListener("click",()=>{
    let num = Math.floor(Math.random()*255);
    let para = document.getElementById("random");
    para.innerText = num;
})

btn.addEventListener("click",()=>{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    skull.style.backgroundColor = `rgb(${r},${g},${b})`;
    
})