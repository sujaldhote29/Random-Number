// let btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     let num = Math.floor(Math.random()*255+ 1);
//     let para = document.querySelector("p");
//     para.innerText = num;
// })


// let h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.innerHTML="Changed";
//     h1.style.color = "red";
// },2000)



let x = document.getElementById("ele1");
let y = document.getElementById("ele2");
let z = document.getElementById("ele3");


// x.addEventListener("click",()=>{
//     x.style.color = "yellow";
// })


z.addEventListener("mousemove",()=>{
    x.style.color = "yellow";
    y.style.color = "orange";
})


z.addEventListener("mouseleave",()=>{
    x.style.color = "black";
    y.style.color = "black";
})