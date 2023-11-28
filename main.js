let ourSkills = document.querySelector('.our-skills');
let skills = document.querySelectorAll('.our-skills .skills .skill .progres span');

let stateSection = document.querySelector('.state');
let states = document.querySelectorAll('.state .box span');
let statesUpdated = false;

let timeUpdated = false;
let latestEvents = document.querySelector('.latest-events');
let events = document.querySelectorAll('.latest-events .events .time .box span');


window.addEventListener('scroll', () => {
  updateSkills();
  updateState();
  updateTime();
});

function updateTime() {
  if (!timeUpdated && window.scrollY >= latestEvents.offsetTop - 100) {
    timeUpdated = true;
    events.forEach((event) => {
      const targetEvent = parseInt(event.dataset.time);
      let currentEvent = 0;
      const interval = setInterval(() => {
        if (currentEvent < targetEvent) {
          currentEvent++;
          event.innerHTML = currentEvent.toString();
        } else {
          clearInterval(interval);
        };
      }, 10)
    })
    window.removeEventListener('scroll', updateTime);
  }
}

function updateSkills() {
  if (window.scrollY >= ourSkills.offsetTop - 100) {
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
    window.removeEventListener('scroll', updateSkills);
  };
}

function updateState() {
  if (!statesUpdated && window.scrollY >= stateSection.offsetTop - 100) {
    statesUpdated = true;
    states.forEach((state) => {
      const targetState = parseInt(state.dataset.number);
      let currentState = 0;
      const interval = setInterval(() => {
        if (currentState < targetState) {
          currentState++;
          state.innerHTML = currentState.toString();
        } else {
          clearInterval(interval);
        }
      }, 10);
    })
    window.removeEventListener('scroll', updateState);
  }
}
