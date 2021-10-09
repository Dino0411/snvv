const start = document.querySelector(".js-btn-star");
const part2 = document.querySelector(".js-part2");
const vid = document.querySelector(".js-vid");
const vid2 = document.querySelector(".js-vid2");

function showPart2() {
  part2.classList.add("open");
}
function hidePart2() {
  part2.classList.remove("open");
}
vid.addEventListener("click", function (event) {
  event.stopPropagation();
});
vid2.addEventListener("click", function (event) {
  event.stopPropagation();
});
start.addEventListener("click", showPart2);
part2.addEventListener("click", hidePart2);
