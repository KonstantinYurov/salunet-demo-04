// Реализация работы слайдера START

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");

    if (slides.length > 0) {
      let maxMultiplier;
      let slideWidth;

      if (window.innerWidth >= 1200) {
        maxMultiplier = Math.ceil(slides.length - 3);
        slideWidth = `calc(360px + (603 - 360) * ((100vw - 1200px) / (1920 - 1200)))`;
      } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        maxMultiplier = Math.ceil(slides.length - 2);
        slideWidth = `calc(375px + (535 - 375) * ((100vw - 768px) / (1200 - 768)))`;
      } else if (window.innerWidth <= 767) {
        maxMultiplier = Math.ceil(slides.length - 1);
        slideWidth = `calc(340px + (797 - 340) * ((100vw - 320px) / (768 - 320)))`;
      }

      let multiplier = 0;

      const updateSliderTransform = () => {
        const sliderContainer = slider.querySelector(
          ".slider__container-field"
        );
        const newMultiplier = Math.min(Math.max(multiplier, 0), maxMultiplier);
        const translation = `calc(${slideWidth} * -${newMultiplier})`;
        sliderContainer.style.transform = `translateX(${translation})`;
      };

      const updateSliderNavClasses = () => {
        const prevButton = slider.querySelector(".slider-nav--prev");
        const nextButton = slider.querySelector(".slider-nav--next");

        prevButton.classList.toggle("slider-nav--prev-active", multiplier > 0);
        nextButton.classList.toggle(
          "slider-nav--next-hidden",
          multiplier === maxMultiplier
        );
      };

      const onSliderNextClick = () => {
        if (multiplier < maxMultiplier) {
          multiplier += 1;
          updateSliderTransform();
          updateSliderNavClasses();
        }
      };

      const onSliderPrevClick = () => {
        if (multiplier > 0) {
          multiplier -= 1;
          updateSliderTransform();
          updateSliderNavClasses();
        }
      };

      /* Реализация перемещения слайдов по свайпу
      const onSwipeStart = (e) => {
        touchStartX = e.touches[0].clientX;
        isSwiping = true;
      };

      const onSwipeMove = (e) => {
        if (isSwiping) {
          const touchCurrentX = e.touches[0].clientX;
          const swipeDelta = touchStartX - touchCurrentX;

          if (swipeDelta > 50) {
            onSliderNextClick();
            isSwiping = false;
          } else if (swipeDelta < -50) {
            onSliderPrevClick();
            isSwiping = false;
          }
        }
      };

      const onSwipeEnd = () => {
        isSwiping = false;
      };
      */

      const nextButton = slider.querySelector(".slider-nav--next");
      nextButton.addEventListener("click", onSliderNextClick);

      const prevButton = slider.querySelector(".slider-nav--prev");
      prevButton.addEventListener("click", onSliderPrevClick);

      /* События для перемещения слайда по свайпу
      slider.addEventListener("touchstart", onSwipeStart);
      slider.addEventListener("touchmove", onSwipeMove);
      slider.addEventListener("touchend", onSwipeEnd);
      */

      updateSliderNavClasses();
    }
  });
});

// Реализация работы слайдера END

// Реализация работы слайдера в прайсе START

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider--price");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");

    if (slides.length > 0) {
      let maxMultiplier;
      let slideWidth;

      if (window.innerWidth >= 1200) {
        maxMultiplier = Math.ceil(slides.length - 3);
        slideWidth = `calc(360px + (603 - 360) * ((100vw - 1200px) / (1920 - 1200)))`;
      } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        maxMultiplier = Math.ceil(slides.length - 2);
        slideWidth = `calc(375px + (535 - 375) * ((100vw - 768px) / (1200 - 768)))`;
      } else if (window.innerWidth <= 767) {
        maxMultiplier = Math.ceil(slides.length - 1);
        slideWidth = `calc(340px + (797 - 340) * ((100vw - 320px) / (768 - 320)))`;
      }

      let multiplier = 0;

      const updateSliderTransform = () => {
        const sliderContainer = slider.querySelector(
          ".slider__container-field"
        );
        const newMultiplier = Math.min(Math.max(multiplier, 0), maxMultiplier);
        const translation = `calc(${slideWidth} * -${newMultiplier})`;
        sliderContainer.style.transform = `translateX(${translation})`;
      };

      const updateSliderNavClasses = () => {
        const prevButton = slider.querySelector(".slider-nav--prev");
        const nextButton = slider.querySelector(".slider-nav--next");

        prevButton.classList.toggle("slider-nav--prev-active", multiplier > 0);
        nextButton.classList.toggle(
          "slider-nav--next-hidden",
          multiplier === maxMultiplier
        );
      };

      const onSliderNextClick = () => {
        if (multiplier < maxMultiplier) {
          multiplier += 1;
          updateSliderTransform();
          updateSliderNavClasses();
        }
      };

      const onSliderPrevClick = () => {
        if (multiplier > 0) {
          multiplier -= 1;
          updateSliderTransform();
          updateSliderNavClasses();
        }
      };

      /* Реализация перемещения слайдов по свайпу
      const onSwipeStart = (e) => {
        touchStartX = e.touches[0].clientX;
        isSwiping = true;
      };

      const onSwipeMove = (e) => {
        if (isSwiping) {
          const touchCurrentX = e.touches[0].clientX;
          const swipeDelta = touchStartX - touchCurrentX;

          if (swipeDelta > 50) {
            onSliderNextClick();
            isSwiping = false;
          } else if (swipeDelta < -50) {
            onSliderPrevClick();
            isSwiping = false;
          }
        }
      };

      const onSwipeEnd = () => {
        isSwiping = false;
      };
      */

      const nextButton = slider.querySelector(".slider-nav--next");
      nextButton.addEventListener("click", onSliderNextClick);

      const prevButton = slider.querySelector(".slider-nav--prev");
      prevButton.addEventListener("click", onSliderPrevClick);

      /* События для перемещения слайда по свайпу
      slider.addEventListener("touchstart", onSwipeStart);
      slider.addEventListener("touchmove", onSwipeMove);
      slider.addEventListener("touchend", onSwipeEnd);
      */

      updateSliderNavClasses();
    }
  });
});

// Реализация работы слайдера в прайсе END
