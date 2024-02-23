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
let endValues = [80, 60, 75, 40, 60, 59, 68, 87]; // Add more values as needed

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