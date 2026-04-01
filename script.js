const coverflowers = document.querySelector(".cover-flowers");
const coverpolaroid = document.querySelector(".cover-polaroid");
coverflowers.addEventListener("click", () => {
  coverflowers.classList.toggle("tilted");
});
coverpolaroid.addEventListener("click", () => {
  coverpolaroid.classList.toggle("tilted");
});

const covercardwrap = document.querySelector(".cover-card-wrap");
covercardwrap.addEventListener("click", () => {
  covercardwrap.classList.toggle("tilted");
});

const coupletext03 = document.querySelector(".couple-text-03");
coupletext03.addEventListener("click", () => {
  coupletext03.classList.toggle("active");
});
const coupletext04 = document.querySelector(".couple-text-04");
coupletext04.addEventListener("click", () => {
  coupletext04.classList.toggle("active");
});

const crooked = document.querySelector(".crooked");
crooked.addEventListener("click", () => {
  crooked.classList.toggle("straight");
});

const scenefive = document.querySelector(".scene-five");
scenefive.addEventListener("click", () => {
  scenefive.classList.toggle("pulled-close");
});

const letter = document.querySelector(".texts-on-letter");
letter.addEventListener("click", () => {
  letter.classList.toggle("active");
});

const driftingfar = document.querySelector(".drifting-far");
driftingfar.addEventListener("click", () => {
  driftingfar.classList.toggle("active");
});

const scenesix = document.querySelector(".scene-six");
scenesix.addEventListener("click", () => {
  scenesix.classList.toggle("pulled-close");
});
