window.onload=function(){
    alert(" Wealcom to SWEETY SWEET Cakes!");

};

document.addEventListener("DOMContentLoaded",function(){
const products=document.querySelectorAll(" .products ing");
products .forEach(img => {
    img.addEvevtListener("mouseover",()=>{
        img.style.border ="5px solid #f7b9c0";

    });
    img.addEvevtListener("mouseout",()=>{ 
        img.style.border ="none";
    });
});
});
