// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})



/* circular bar function */
// Get all circular-progress elements
let circularProgressList = document.querySelectorAll(".circular-progress");

// Define different end values for each progress bar
let endValues = [80, 75, 70, 60, 80, 85, 90, 80, 60]; // Add more values as needed

// Iterate over each circular-progress element
circularProgressList.forEach((circularProgress, index) => {
    let progressValue = circularProgress.querySelector(".progress-value");

    let progressStartValue = 0,
        progressEndValue = endValues[index], // Use different end values
        speed = 100;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`
        circularProgress.style.background = `conic-gradient(#0062b9 ${progressStartValue * 3.6}deg, #ededed 0deg)`

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
});


const typingPhrases = [
  "I'm FullStack Web Developer...",
  "I'm ReactJS Developer...",
  "I'm NodeJs Developer...",
  "I'm ExpressJs Developer...",
  "I'm MongoDB Developer.",
  "I'm SQL Developer",
];

const typingElement = document.querySelector(".typing");
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";

function type() {
  if (letterIndex < typingPhrases[phraseIndex].length) {
    currentPhrase += typingPhrases[phraseIndex][letterIndex];
    typingElement.textContent = currentPhrase;
    letterIndex++;
    setTimeout(type, 60);
  } else {
    setTimeout(erase, 800);
  }
}

function erase() {
  if (letterIndex > 0) {
    currentPhrase = currentPhrase.slice(0, -1);
    typingElement.textContent = currentPhrase;
    letterIndex--;
    setTimeout(erase, 20);
  } else {
    phraseIndex = (phraseIndex + 1) % typingPhrases.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  type(); // Call the type function to start the animation
});