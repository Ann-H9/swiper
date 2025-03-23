


const swiper = new Swiper('.swiper-container', {
  // Опции Swiper
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




const buttons = document.querySelectorAll(".main__button");
const contents = document.querySelectorAll(".content");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => btnClick(btn));
});

function btnClick(btn) {
    contents.forEach((content) => {
        console.log(content.classList);

        if (content.classList.contains("hidden")) {
            btn.textContent = "Скрыть";
        } else {
            btn.textContent = "Показать все";
        }

        content.classList.toggle("hidden");
    });
}