    document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const sidebar = document.querySelector(".sidebar");
    const mainSlide = document.querySelector(".main-slide");
    const downButton = document.querySelector(".down-button");
    const upButton = document.querySelector(".up-button");
  
    let activeSlideIndex = 0;
  
    upButton.addEventListener("click", () => {
      changeSlide("up");
    });
  
    downButton.addEventListener("click", () => {
      changeSlide("down");
    });
  
    function changeSlide(direction) {
      if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex === mainSlide.children.length) {
          activeSlideIndex = 0;
        }
      } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
          activeSlideIndex = mainSlide.children.length - 1;
        }
      }
  
      const height = mainSlide.clientHeight;
      mainSlide.style.transform = `translateY(${-activeSlideIndex * height}px)`;
    }
  });
  