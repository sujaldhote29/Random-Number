let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    let num = Math.floor(Math.random()*255+ 1);
    let para = document.querySelector("p");
    para.innerText = num;
})




