//Query selectors
const THUMBNAILS = document.querySelectorAll(
  ".container__gallery--thumbnail img"
);

//Navbar

const NAVBAR = document.querySelector(".navbar");

const B_ABOUT = document.getElementById("button--about");
const B_NEWSLETTER = document.getElementById("button--newsletter");
const B_GALLERY = document.getElementById("button--gallery");
const B_HOME = document.getElementById("button--home");

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

//Newsletter

const NEWSLETTER = document.querySelector(".newsletter");

//About

const ABOUT = document.querySelector(".about");

//Variables

//Stores index of current img - for pic navigation
let currentImgIndex;

//Function to close overlay
const closeOVERLAY = () => {
  OVERLAY.classList.add("hidden");
  CONTAINER.classList.remove("hidden");
  NAVBAR.classList.remove("hidden");
  NEWSLETTER.classList.add("hidden");
};

//Close overlay on click

OVERLAY.addEventListener("click", closeOVERLAY);

//Navbar button ABOUT

const showPage__about = () => {
  ABOUT.classList.remove("hidden");
  CONTAINER.classList.add("hidden");
  NEWSLETTER.classList.add("hidden");
  B_ABOUT.classList.add("active");
};

B_ABOUT.addEventListener("click", showPage__about);

//Navbar button NEWSLETTER

const showPage__newsletter = () => {
  NEWSLETTER.classList.remove("hidden");
  CONTAINER.classList.add("hidden");
  ABOUT.classList.add("hidden");
};

B_NEWSLETTER.addEventListener("click", showPage__newsletter);

//Navbar button GALLERY

const showPage__gallery = () => {
  CONTAINER.classList.remove("hidden");
  NEWSLETTER.classList.add("hidden");
  ABOUT.classList.add("hidden");
};

B_GALLERY.addEventListener("click", showPage__gallery);

//Navbar button HOME

const showPage__home = () => {
  CONTAINER.classList.add("hidden");
  NEWSLETTER.classList.add("hidden");
  ABOUT.classList.add("hidden");
  NAVBAR.classList.add("hidden");

  OVERLAY.classList.remove("hidden");
};

B_HOME.addEventListener("click", showPage__home);

//Reused functions:

const showPrevIMG = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = THUMBNAILS.length - 1;
  } else {
    currentImgIndex--;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const showNextIMG = () => {
  if (currentImgIndex === THUMBNAILS.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

//Function to close popup

const closePOPUP = () => {
  POPUP.classList.add("hidden");
  NAVBAR.classList.remove("hidden");
};

//Show each picture

THUMBNAILS.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {
    POPUP_IMG.src = e.target.src;

    setTimeout(() => {
      NAVBAR.classList.add("hidden");
      POPUP.classList.remove("hidden");
      POPUP.classList.add("fadeIn");
    }, 600);

    POPUP.classList.remove("fadeIn");
    currentImgIndex = index;
  });
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
  if (e.code === "ArrowLeft" || e.keyCode === 37) {
    showPrevIMG();
  }
});

//Arrow next slide
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" || e.keyCode === 39) {
    showNextIMG();
  }
});

//Arrows up down & ESC close popup
document.addEventListener("keydown", (e) => {
  if (!POPUP.classList.contains("hidden")) {
    if (e.code === "ArrowDown" || e.keyCode === 40) {
      closePOPUP();
    }

    if (e.code === "ArrowUp" || e.keyCode === 38) {
      closePOPUP();
    }

    if (e.code === "Escape" || e.keyCode === 27) {
      closePOPUP();
    }
  }
});

//Close popup on click - outside of img
POPUP.addEventListener("click", (e) => {
  if (e.target === POPUP) {
    closePOPUP();
  }
});
