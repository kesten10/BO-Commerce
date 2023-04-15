
const inputs = document.querySelectorAll(".input");

function focusFunc(){
let parent = this.parentNode;
parent.classList.add("focus");
}

function blurFunc(){
let parent = this.parentNode;
if (this.value == ""){
parent.classList.remove("focus");
}
}

inputs.forEach((input) => {
input.addEventListener("focus", focusFunc);
input.addEventListener("blur", blurFunc);
});


function changeLanguage() {
  const elements = document.querySelectorAll('[data-lang]');
  const lang = document.documentElement.lang;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const langText = element.getAttribute('data-lang');

    if (lang === 'en') {
      element.textContent = langText.tr;
    } else if (lang === 'tr') {
      element.textContent = langText.en;
    }
  }

  if (lang === 'en') {
    document.documentElement.lang = 'tr';
  } else if (lang === 'tr') {
    document.documentElement.lang = 'en';
  }
}
