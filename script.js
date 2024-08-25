const button = document.querySelector("#button");
const yesbutton =document.querySelector("#yesbutton")

const buttonheight=50;
const buttonwidth=150;

const maxwidth=window.innerWidth-buttonwidth;
const maxheight=window.innerHeight-buttonheight;
console.log(maxwidth);

button.addEventListener('mouseover',()=>{
  
    button.style.left=Math.floor(Math.random()*(maxwidth)) + 'px';

    button.style.top=Math.floor(Math.random()*(maxheight)) + 'px';
})


button.addEventListener('click',()=>{
  
    button.style.left=Math.floor(Math.random()*(maxwidth)) + 'px';

    button.style.top=Math.floor(Math.random()*(maxheight)) + 'px';
})


 yesbutton.addEventListener("click",nextpage)

function nextpage(){
    window.location.href="yes.html";
}