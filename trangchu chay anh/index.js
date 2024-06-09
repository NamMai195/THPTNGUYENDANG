const listImage = document.querySelector(".list-images");
const imgs = document.getElementsByTagName("img");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const length = imgs.length;
let i = 0;
// set tg thực thi liên tục
const handleChangeSlide = () => {
  if (i == length - 1) {
    i = 0;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = ` translateX(${width * -1 * i}px)`;
  } else {
    i++;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = ` translateX(${width * -1 * i}px)`;
  }
};
let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
btnRight.addEventListener("click", () => {
  clearInterval(handleEventChangeSlide);
  handleChangeSlide();
  handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
});
btnLeft.addEventListener("click", () => {
  clearInterval(handleEventChangeSlide);
  if (i == 0) {
    i = length - 1;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = ` translateX(${width * -1 * i}px)`;
  } else {
    i--;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = ` translateX(${width * -1 * i}px)`;
  }
  handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
});
