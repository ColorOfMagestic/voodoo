const parent = document.querySelector("#parent");
const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const text = document.querySelector("#text");

let count;

let str =
  "Действуйте, даже если для этого нужен прыжок в неизвестность.Следите за новостями, они несут важную для вас информацию.Вскорости бюджет вашей семьи будет пополнен.Влюбленность – вот что ожидает вас на этой неделе.Будьте внимательны и осторожны в дороге.Звезды к вам благосклонны.Ваши ожидания не напрасны.Будьте бдительнее и тщательнее запирайте двери.Все ваши проблемы кроются в вас самих.Все, что вы делаете, может привести к непредсказуемому результату.Проблема кроется совсем не в том, что вы думаете.";

start.addEventListener("click", allFunc);
stop.addEventListener("click", () => {
  clearInterval(intervalCount);
  prediction(str);
  timer.style.display = "none";
  stop.classList.remove("active");
});

function allFunc() {
  timerCount();
  changeClassActive();
}

function changeClassActive() {
  start.classList.remove("active");
  stop.classList.add("active");
}

let intervalCount;
function timerCount() {
  count = 1;
  intervalCount = setInterval(() => {
    count <= 9 ? count++ : (count = 1);
    timer.innerHTML = count;
  }, 100);
}

function prediction(str) {
  let predictions = str.split(".");
  for (let i = 0; i < predictions.length - 1; i++) {
    text.innerHTML = predictions[count];
  }
}
