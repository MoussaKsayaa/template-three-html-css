let ourSkills = document.querySelector(".our-skills");
let skills = document.querySelectorAll(
  ".our-skills .skills .skill .progres span"
);

let stateSection = document.querySelector(".state");
let states = document.querySelectorAll(".state .box span");
let statesUpdated = false;

let timeUpdated = false;
let latestEvents = document.querySelector(".latest-events");
let events = document.querySelectorAll(
  ".latest-events .events .time .box span"
);

let endYear = new Date("Dec 31, 2023 23:59:59").getTime();
const countDown = setInterval(() => {
  let dateNow = new Date().getTime();
  let diff = endYear - dateNow;
  let days = diff / (1000 * 60 * 60 * 24);
  let daysElement = document.querySelector(".latest-events .time .days");
  daysElement.innerHTML = Math.floor(days);
  let hours = (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  let hoursElement = document.querySelector(".latest-events .time .hours");
  hoursElement.innerHTML = Math.floor(hours);
  let minutes = (diff % (1000 * 60 * 60)) / (1000 * 60);
  let minElement = document.querySelector(".latest-events .time .min");
  minElement.innerHTML = Math.floor(minutes);
  let sec = (diff % (1000 * 60)) / 1000;
  let secElement = document.querySelector(".latest-events .time .sec");
  secElement.innerHTML = Math.floor(sec);
  if (diff <= 0) {
    clearInterval(countDown);
  }
}, 1000);

window.addEventListener("scroll", () => {
  updateSkills();
  updateState();
});

function updateSkills() {
  if (window.scrollY >= ourSkills.offsetTop - 100) {
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
    window.removeEventListener("scroll", updateSkills);
  }
}

function updateState() {
  if (!statesUpdated && window.scrollY >= stateSection.offsetTop - 100) {
    statesUpdated = true;
    states.forEach((state) => {
      const interval = setInterval(() => {
        if (parseInt(state.textContent) < parseInt(state.dataset.number)) {
          state.innerHTML++;
        } else {
          clearInterval(interval);
        }
      }, 2000 / parseInt(state.dataset.number));
    });
    window.removeEventListener("scroll", updateState);
  }
}
