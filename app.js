let nav = document.getElementById("nav")
let cards = document.getElementById("cards")
let action = document.getElementById("action")
let transition = document.getElementById("transition")
action.addEventListener('click', (e) => {
    console.log("test")
    nav.classList.add("fadeOut")
    cards.classList.add("fadeOut")
    transition.classList.add("started")
    setTimeout(() => {
        window.location.href = "./second_page.html"
    }, 3000)
})