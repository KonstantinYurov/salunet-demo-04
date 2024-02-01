
// Реализация работы выпадающего меню на мобильной версии START

document.addEventListener("DOMContentLoaded", () => {
    const burgerImage = document.querySelector(".burger__image");
    const menuContainer = document.querySelector(".menu__container");
    const mobileClose = document.querySelector(".menu-mob__close");
  
    burgerImage.addEventListener("click", () => {
        menuContainer.classList.add("menu__container--active");
        document.body.classList.add("body--scroll-hidden");
    });

    mobileClose.addEventListener("click", () => {
        menuContainer.classList.remove("menu__container--active");
        document.body.classList.remove("body--scroll-hidden");
    });

	// Закрытие выпадающего меню при нажатии на пункты меню, чтобы реализовать прокрутку якорей на станице
	
    const anchorNavItems = document.querySelectorAll(".anchor-nav__item");
    anchorNavItems.forEach(item => {
        item.addEventListener("click", () => {
            menuContainer.classList.remove("menu__container--active");
            document.body.classList.remove("body--scroll-hidden");
        });
    });
});


// Реализация работы выпадающего меню на мобильной версии END

// Реализация работы кнопки "Ещё" START

document.addEventListener("DOMContentLoaded", () => {
  const portfolioButton = document.querySelector(".button");

  if (portfolioButton) {
    const portfolioElements = document.querySelectorAll(".portfolio-item");

    let counter = 6;

    portfolioButton.addEventListener("click", () => {
      for (
        let i = counter;
        i < counter + 6 && i < portfolioElements.length;
        i++
      ) {
        portfolioElements[i].classList.add("portfolio-item--active");
      }

      counter += 6;
      if (counter >= portfolioElements.length) {
        counter = 6;
        portfolioButton.classList.add("button--hidden");
      }
    });
  }
});

// Реализация работы кнопки "Ещё" категории END

// Реализация поворота стрелки в частых вопросах START

document.addEventListener("DOMContentLoaded", () => {
  const oftenQuestionContainer = document.querySelector(
    ".often-question__container"
  );

  if (oftenQuestionContainer) {
    const summaries = oftenQuestionContainer.querySelectorAll("summary");

    summaries.forEach((summary) => {
      summary.addEventListener("click", () => {
        const iconRightArrow = summary.querySelector(".icon-plus");
        iconRightArrow.classList.toggle("icon-plus--active");
      });
    });
  }
});

// Реализация поворота стрелки в частых вопросах END

// Реализация работы блока с частыми вопросами START

document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll(".often-question__details");

  if (detailsElements.length > 0) {
    const summaries = document.querySelectorAll(".often-question__summary");
    summaries.forEach((summary) => {
      summary.addEventListener("click", () => {
        const details = summary.closest(".often-question__details");
        const isActive = details.classList.contains(
          "often-question__details--active"
        );

        if (isActive) {
          details.classList.remove("often-question__details--active");
        } else {
          details.classList.add("often-question__details--active");
        }
      });
    });
  }
});

// Реализация работы блока с частыми вопросами END

// Реализация фиксирования body при открытом мобильном меню START

document.addEventListener("DOMContentLoaded", () => {
	const fixScroll = () => {
	  const popupContainer = document.querySelector(".menu__container--active");
	  const body = document.body;
  
	  body.style.overflow = popupContainer ? "hidden" : "auto";
	};
  
	fixScroll();
  
	const observer = new MutationObserver(fixScroll);
	observer.observe(document.body, { attributes: true, subtree: true });
  
	window.addEventListener("resize", fixScroll);
  });

// Реализация фиксирования body при открытом мобильном меню END