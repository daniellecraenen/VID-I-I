console.log("Howdy!");

var links = document.querySelectorAll("nav a");
var container = document.querySelector("ol");
var bgimage = document.querySelector(".bg-container");

// lijst met variable met knoppen waarbij ik de 
// functie aanroep bij het klikken van de knop.

var knop1 = document.querySelector("nav a:nth-of-type(1)");
knop1.addEventListener("click", functieafbeelding1);

var knop2 = document.querySelector("nav a:nth-of-type(2)");
knop2.addEventListener("click", functieafbeelding2);

var knop3 = document.querySelector("nav a:nth-of-type(3)");
knop3.addEventListener("click", functieafbeelding3);

var knop4 = document.querySelector("nav a:nth-of-type(4)");
knop4.addEventListener("click", functieafbeelding4);

var knop5 = document.querySelector("nav a:nth-of-type(5)");
knop5.addEventListener("click", functieafbeelding5);


// functies die de navigatie knoppen navigeren naar de juiste
// list item.

links.forEach(link => {
    link.addEventListener("click", goToZelda);
})

function goToZelda(event) {
    event.preventDefault();
    let deLink = event.target;
    let deZelda = document.querySelector(deLink.hash);

    deZelda.scrollIntoView( {
        behavior: "smooth",
        inline: "center"
      } );
}

// funties die worden aangeroepen gekoppeld aan de CSS 
// waardoor de afbeelding wordt aangepast.

function functieafbeelding1() {
    bgimage.dataset.map = "image1";

    console.log("hoi");
}

function functieafbeelding2() {
    bgimage.dataset.map = "image2";

    console.log("hoi2");
}

function functieafbeelding3() {
    bgimage.dataset.map = "image3";

    console.log("hoi3");
}

function functieafbeelding4() {
    bgimage.dataset.map = "image4";

    console.log("hoi4");
}

function functieafbeelding5() {
    bgimage.dataset.map = "image5";

    console.log("hoi5");
}