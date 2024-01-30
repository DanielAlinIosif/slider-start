const container = document.createElement('div');  
const sidebar = document.createElement('div');  
const mainSlide = document.querySelector(".main-slide");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const numberOfSlides = mainSlide.querySelectorAll('div').lenght;
  
    mainSlide.style.top = `-${(numberOfSlides - 1) * 100}vh`;
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
        if (activeSlideIndex === numberOfSlides) {
          activeSlideIndex = 0;
        }
      } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
          activeSlideIndex = numberOfSlides - 1;
        }
      }
      const height = container.clientHeight;

      mainSlide.style.transform = `translateY(${-activeSlideIndex * height}px)`;

      sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;

    }
  