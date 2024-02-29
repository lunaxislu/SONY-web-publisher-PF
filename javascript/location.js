var swiper = new Swiper(".mySwiper", {
  slidesPerView: "1",
  loop: true,
  allowTouchMove: true,
  observer: true,
  observeParents: true,
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  loop: false,
  allowTouchMove: false,
  observer: true,
  observeParents: true,
  breakpoints: {
    1365: {
      allowTouchMove: true,
    },
  },
});

const map_btn = document.querySelector(".map_open_btn");

const map = document.querySelector("#map_wrapper");

map_btn.addEventListener("click", () => {
  if (map.classList.contains("false")) {
    map_btn.textContent = "지도접기";
    map.classList.remove("false");
  } else {
    map_btn.textContent = "지도보기";
    map.classList.add("false");
  }
});
