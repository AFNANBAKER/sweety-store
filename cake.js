document.addEventListener( "DocumentLoaded",function(){

    const buttons=document.querySelectorAll(" button");
    buttons.forEach( button=>{
        button.addEventListener ("click",function(){
            alert(" thank you")
        });
    });
});