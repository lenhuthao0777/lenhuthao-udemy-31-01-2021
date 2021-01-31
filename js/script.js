const dropUpBtn = document.querySelector(".footer-btn--dropUp");
dropUpBtn.addEventListener("click", () => {
    var languageBtn = document.querySelector(".footer-btn--laguage");
    languageBtn.classList.toggle("language-active");
})