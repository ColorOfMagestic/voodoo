const parent = document.querySelector("#parent");
const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const text = document.querySelector("#text");

let count;

let str =
  "Судьба озолотит вам ручку — пошлет огромную получку.Вы в сливки общества войдете, возможно, спонсора найдете.У тебя прекрасный стиль, ждет тебя автомобиль.Удачу слови за хвост — ждет тебя карьерный рост.Очень скоро от друзей жди прекрасных новостей.Ты избавишься от плохой привычки и приобретешь две новых.Веселей смотри вперед — там тебя богатство ждет.Займитесь любимыми видами спорта, иначе мир останется без рекордов.Ждет вас поездка в Европу и удача по гороскопу. Тут укрзалізниця купити квиток ціна самая низкая.Не стоит этого скрывать, тебе сегодня выпивать.Негаданно, случайно откроешь чью-то тайну.Денег будет немеряно! И не фальшивых, а проверенных.Вас ждет немало происшествий и интересных путешествий — на курсы, в отпуск, за границу — куда судьба распорядится.Идите работать, иначе ваши желания не исполнятся.Пусть радости слеза прольется, скоро старый друг вернется.Счастью быть — не миновать, крепче покупай кровать.Быть богатым тебе в раз, не слей прибыль в унитаз.Найдешь вторую половину. Ну, или золотую середину.Повышение на горизонте светит, будь ярче и босс тебя заметит.В огороде клад найдешь, на Канарах отдохнешь.Будешь бить весь год баклуши, есть икру с фруктовым пуншем.Деньги спустятся с небес, купишь черный Мерседес.Пусть в жизни все проходит мимо кроме здоровья, денег и интима.Будет вам всего и в меру — деньги, тачка, рост карьерный. Будут рядышком друзья, в полном сборе вся семья.Для сердца ожидает вас услада — большое повышение оклада.";

start.addEventListener("click", funcStart);

stop.addEventListener("click", funcStop);

function funcStart() {
  timerCount();
  changeClassActive();
}

function funcStop() {
  clearInterval(intervalCount);
  prediction(str);
  timer.style.display = "none";
  stop.classList.remove("active");
}

function changeClassActive() {
  start.classList.remove("active");
  stop.classList.add("active");
}

let intervalCount;
function timerCount() {
  count = 1;
  intervalCount = setInterval(() => {
    count <= 28 ? count++ : (count = 1);
    timer.innerHTML = count;
  }, 50);
}

function prediction(str) {
  let predictions = str.split(".");
  for (let i = 0; i < predictions.length - 1; i++) {
    text.innerHTML = predictions[count];
  }
}
