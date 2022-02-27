
//Query selectors
const THUMBNAILS = document.querySelectorAll(".container__gallery--thumbnail img");

//Popup
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");

//Arrows
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

//Entry screen
const OVERLAY = document.querySelector(".overlay");
const CONTAINER = document.querySelector(".container");


//Variables
    //Stores index of current img - for pic navigation
    let currentImgIndex; 


//Function to close overlay
const closeOVERLAY = () => {
    
    OVERLAY.classList.add("hidden");    
    CONTAINER.classList.remove("hidden");
}
    

//Close overlay on click 

OVERLAY.addEventListener("click", closeOVERLAY);


//Reused functions:

const showPrevIMG = () => {
    if (currentImgIndex === 0)
    {
        currentImgIndex = THUMBNAILS.length-1;

    }

    else{
        currentImgIndex--;
    }
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src; 
    
}


const showNextIMG = () => {
    if (currentImgIndex===THUMBNAILS.length-1)
    {
        currentImgIndex = 0;

    }

    else{

        setTimeout(()=> {
           POPUP.classList.add("fadeOut")},600);

        currentImgIndex++;
    }

 
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src; 
};


const closePOPUP = () => {
    
    setTimeout(()=> {
        
        POPUP.classList.add("fade-out");
        POPUP.classList.add("hidden");    
    },600);

    POPUP.classList.add("hidden");
    POPUP.classList.remove("fade-out");
    
}
    


//Show each picture

THUMBNAILS.forEach((thumbnail, index)=> {
    thumbnail.addEventListener("click", (e) => {
        
    POPUP_IMG.src=e.target.src;

    setTimeout(()=> {
        POPUP.classList.remove("hidden");
        POPUP.classList.add("fadeIn");    
    },600);
      
    POPUP.classList.remove("fadeIn");
    currentImgIndex = index;
    })
});

//Event listeners for buttons

POPUP_CLOSE.addEventListener("click", closePOPUP);
ARROW_RIGHT.addEventListener("click", showNextIMG);
ARROW_LEFT.addEventListener("click", showPrevIMG);



//LOG in pressed key
document.addEventListener("keydown", (e) => {
    console.log(e);
});


//Arrow prev slide
document.addEventListener("keydown", (e) => {
    if(e.code==="ArrowLeft" || e.keyCode===37){
        showPrevIMG();
    }
});


//Arrow next slide
document.addEventListener("keydown", (e) =>{
    if (e.code==="ArrowRight" || e.keyCode===39){
        showNextIMG();
    }
})

//Arrows up down & ESC close popup
document.addEventListener("keydown", (e) => {

if (!POPUP.classList.contains("hidden")){
    if(e.code==="ArrowDown" || e.keyCode===40){
        closePOPUP();
     }
 
     if(e.code==="ArrowUp" || e.keyCode===38){
         closePOPUP();
     }
 
     if(e.code==="Escape" || e.keyCode===27){
         closePOPUP();
     }
 
}
});

//Close popup on click - outside of img
POPUP.addEventListener("click", (e) =>{
    if (e.target===POPUP){
        closePOPUP();
    }
});


