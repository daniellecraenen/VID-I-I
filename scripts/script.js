// // JavaScript Document

const links = document.querySelectorAll("nav a");
const container = document.querySelector("ol");
const cards = container.querySelectorAll("li");

// Functie om achtergrondafbeelding van body::before aan te passen
const setBodyBackgroundImage = (bgImage) => {
  document.body.style.backgroundImage = `url(${bgImage})`;
};

// Laad afbeelding van eerste element bij het openen van de website
const firstBgImage = cards[0].dataset.bg;
setBodyBackgroundImage(firstBgImage);

// Scroll event handler
const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardHeight = card.offsetHeight;
    const cardBottom = cardTop + cardHeight;

    if (cardTop < windowHeight && cardBottom > 0) {
      const bgImage = card.dataset.bg;
      setBodyBackgroundImage(bgImage);
    }
  });
};

// Toevoegen van scroll event listener
window.addEventListener("scroll", handleScroll);

// Click event listeners voor navigatie-items
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const deLink = event.target;
    const deZelda = document.querySelector(deLink.hash);

    deZelda.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    // Aanroepen van setBodyBackgroundImage() met de bijbehorende data-bg van het aangeklikte navigatie-item
    const bgImage = deLink.dataset.bg;
    setBodyBackgroundImage(bgImage);
  });
});

// Keyboard event listener voor het scrollen door de carousel
document.addEventListener("keydown", (event) => {
  const currentCard = document.querySelector(".active");
  const nextCard = currentCard.nextElementSibling;

  if (event.key === "ArrowRight" && nextCard !== null) {
    currentCard.classList.remove("active");
    nextCard.classList.add("active");

    const bgImage = nextCard.dataset.bg;
    setBodyBackgroundImage(bgImage);
  } else if (event.key === "ArrowLeft" && currentCard.previousElementSibling !== null) {
    const prevCard = currentCard.previousElementSibling;
    currentCard.classList.remove("active");
    prevCard.classList.add("active");

    const bgImage = prevCard.dataset.bg;
    setBodyBackgroundImage(bgImage);
  }
});











// console.log("Howdy!");

// var links = document.querySelectorAll("nav a");
// var container = document.querySelector("ol");

// links.forEach(link => {
//     link.addEventListener("click", goToZelda);
// })

// function goToZelda(event) {
//     event.preventDefault();
//     let deLink = event.target;
//     let deZelda = document.querySelector(deLink.hash);

//     deZelda.scrollIntoView( {
//         behavior: "smooth",
//         inline: "center"
//       } );
// }


