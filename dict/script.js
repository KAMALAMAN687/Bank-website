// menu bar-open
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const faSolid = document.querySelector(".fa-solid");
const hlink = document.querySelectorAll(".hlink");
hamburger.addEventListener("click",()=>{
     menu.classList.toggle('hidden');
     faSolid.classList.toggle("fa-xmark");
});
hlink.forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden");
        faSolid.classList.toggle("fa-xmark");
    })
})



const hello =document.querySelectorAll(".hello");
const content =document.querySelectorAll(".slight");


var changer = function(manual){
     hello.forEach(hel=>{
        hel.classList.remove("lemon");
     });
     content.forEach(con=>{
        con.classList.remove("content");
     });
     hello[manual].classList.add("lemon");
     content[manual].classList.add("content");
}





hello.forEach((hel,i)=>{
    hel.addEventListener("click",()=>{
        changer(i);
    }
    )
})





const toggleBtn= document.getElementById("toggleBtn");
const rone = document.querySelectorAll(".rone");
const rtwo = document.querySelectorAll(".rtwo");


toggleBtn.addEventListener("click",()=>{
    for(const i=0;i<3;i++){
        rone[i].classList.toggle("hidden");
        rtwo[i].classList.toggle("hidden");
    }
    
})








