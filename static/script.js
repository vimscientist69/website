const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".nav-bg");
const introHeading = document.getElementById("intro-heading");
const introDescription = document.getElementById("intro-description");

let currentOpenCard = null; // Track the currently open card

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    navbg.classList.toggle("active");
});

function closeAllCards() {
    const allCards = document.querySelectorAll('.about-card, .contact-card');
    allCards.forEach(card => {
        card.classList.remove('active');
    });
    // Show the intro text when closing all cards
    introHeading.style.display = "block";
    introDescription.style.display = "block";
    currentOpenCard = null; // Reset the currently open card
}

function toggleCard(card) {
    card.classList.toggle('active');
    // Hide the intro text when a card is opened
    introHeading.style.display = "none";
    introDescription.style.display = "none";
    currentOpenCard = card; // Set the currently open card
}

const allAnchors = document.querySelectorAll('[data-section]');

allAnchors.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        if (currentOpenCard) {
            if (currentOpenCard === document.querySelector(`.${anchor.getAttribute('data-section')}-card`)) {
                // Clicked on the same anchor that corresponds to the currently open card, so close all cards
                closeAllCards();
            } else {
                // Clicked on a different anchor, so close the current card and open the new one
                closeAllCards();
                toggleCard(document.querySelector(`.${anchor.getAttribute('data-section')}-card`));
            }
        } else {
            // No card is currently open, so open the clicked card
            toggleCard(document.querySelector(`.${anchor.getAttribute('data-section')}-card`));
        }
    });
});
