//Common Js
document
  .querySelectorAll(".watch-control, .iphone-btn, .controls a")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
//Enf of Common Js

//Cube
let y = 20;
let x = 0;
let z = 0;
let bool = true;
let interval;

const cube = document.querySelector(".cube");

document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});

const playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};
playPause();

document.querySelector(".controls").addEventListener("mouseover", () => {
  bool = false;
  playPause();
});

document.querySelector(".controls").addEventListener("mouseout", () => {
  bool = true;
  playPause();
});
//End of Cube

//Slide Show
const slideShowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
    i === 1 && div.classList.add("change");
    document.querySelector(".slideshow").appendChild(div);
  }
};
slideShowDivs();

const divs = document.querySelectorAll(".slideshow div");
let divCounter = 0;
const slideshow = () => {
  setInterval(() => {
    divCounter++;
    const div = document.querySelector(".slideshow .change");
    div.classList.remove("change");
    if (divCounter < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      divCounter = 1;
    }
  }, 5000);
};
slideshow();
//End of Slide Show

//Section 3

const section3Content = document.querySelector(".section-3-content");
window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section3Content.offsetTop + section3Content.offsetHeight / 2
  ) {
    section3Content.classList.add("change");
  } else {
    section3Content.classList.remove("change");
  }
});
//Endof Section 3

//Section 4
const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");

const watchTopControl = document.querySelector(".watch-top-control");
const watchRightControl = document.querySelector(".watch-right-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchLeftControl = document.querySelector(".watch-left-control");

let axisY = 0;
let axisX = 0;

const hideControl = () => {
  // console.log(axisY);
  if (axisY === -280) {
    watchTopControl.classList.add("hide-control");
  } else {
    watchTopControl.classList.remove("hide-control");
  }
  if (axisX === -280) {
    watchLeftControl.classList.add("hide-control");
  } else {
    watchLeftControl.classList.remove("hide-control");
  }
  if (axisY === 280) {
    watchBottomControl.classList.add("hide-control");
  } else {
    watchBottomControl.classList.remove("hide-control");
  }
  if (axisX === 280) {
    watchRightControl.classList.add("hide-control");
  } else {
    watchRightControl.classList.remove("hide-control");
  }
};

watchTopControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
  hideControl();
});

watchLeftControl.addEventListener("click", () => {
  watchBands.style.marginLeft = `${(axisX -= 70)}rem`;
  hideControl();
});

watchBottomControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hideControl();
});

watchRightControl.addEventListener("click", () => {
  watchBands.style.marginLeft = `${(axisX += 70)}rem`;
  hideControl();
});
//End of Section 4
