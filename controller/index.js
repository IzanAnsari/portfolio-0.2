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


const typingPhrases = [
  "I'm MERN Stack Developer...",
  "I'm ReactJS Developer...",
  "I'm NodeJs Developer...",
  "I'm ExpressJs Developer...",
  "I'm MongoDB Developer.",
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




function copyToClipboard(event) {
  event.preventDefault(); // Prevent the default behavior of the button
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  
  var copyButton = document.getElementById("copyText");
  copyButton.innerHTML = '<i class="fas fa-check"></i> Copied';
  copyButton.classList.add("copied");

  var button = document.getElementById("copyButton");
  button.style.backgroundColor = "#2ecc71";  // Change to green background after copy
  
  // Reset button text and style after 2 seconds
  setTimeout(function() {
    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy Email';
    copyButton.classList.remove("copied");
    button.style.backgroundColor = "#3498db";  // Reset to original blue color
  }, 2000);
}