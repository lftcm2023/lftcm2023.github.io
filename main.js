const navToggle = document.querySelector(".mobile-nav-toggle")
const primaryNav = document.querySelector(".primary-navigation")
const primaryNavLinks = document.querySelectorAll(".primary-navigation a")

function toggle() {
    primaryNav.hasAttribute('data-visible')
      ? navToggle.setAttribute('aria-expanded', false)
      : navToggle.setAttribute('aria-expanded', true)
    primaryNav.toggleAttribute('data-visible')
}

for (let link of primaryNavLinks) {
    link.addEventListener('click', toggle)
}
navToggle.addEventListener('click', toggle)