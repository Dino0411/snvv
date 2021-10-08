const start = document.querySelector(".js-btn-start");
const part1 = document.querySelector(".js-part1");
const btnPart1 = document.querySelector(".js-btn-part1");

function showPart1() {
  part1.classList.add("open");
}
function hidePart1() {
  part1.classList.remove("open");
}

start.addEventListener("click", showPart1);
part1.addEventListener("click", hidePart1);
btnPart1.addEventListener("click", function (event) {
  event.stopPropagation();
});
