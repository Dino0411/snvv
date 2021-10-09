const start = document.querySelector(".js-btn-star");
const part2 = document.querySelector(".js-part2");
const vid = document.querySelector(".js-vid");

function showPart2() {
  part2.classList.add("open");
}
function hidePart2() {
  part2.classList.remove("open");
}
vid.addEventListener("click", function (event) {
  event.stopPropagation();
});

start.addEventListener("click", showPart2);
part2.addEventListener("click", hidePart2);
