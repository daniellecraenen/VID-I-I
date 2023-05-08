//////////////////////
///// VARIABELEN /////
//////////////////////

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

// variabelen geluid afspelen hoveren

var hoverArea1 = document.querySelector('li:nth-of-type(1)');
var audioElement1 = document.getElementById('audio-element1');

var hoverArea2 = document.querySelector('li:nth-of-type(2)');
var audioElement2 = document.getElementById('audio-element2');

var hoverArea3 = document.querySelector('li:nth-of-type(3)');
var audioElement3 = document.getElementById('audio-element3');

var hoverArea4 = document.querySelector('li:nth-of-type(4)');
var audioElement4 = document.getElementById('audio-element4');

var hoverArea5 = document.querySelector('li:nth-of-type(5)');
var audioElement5 = document.getElementById('audio-element5');
 
//////////////////////
///// FUNCTIONS //////
//////////////////////

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

// toetsenbord 

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
	const pressedKey = event.key;
	
	// if arrow right is pressed 	
	if (pressedKey == "ArrowRight") {
		// standaard interactie van de link niet uitvoeren
		event.preventDefault();
		
		// find the current link in the nav
		const currentLink = document.querySelector("nav a[aria-current='true']");
		// the new link is the next link in the nav
		const newLink = currentLink.nextElementSibling;
		// if the current link is the last link - the new link does not exist --> do nothing
		// if the new link does exact find the new li --> scroll to new li
		if (newLink) {
			const newLi = document.querySelector("ol li" + newLink.hash);

            const newBg = newLi.dataset.bg;
            bgimage.dataset.map = newBg;
			
			// currentLink isn't current link anymore
			currentLink.removeAttribute("aria-current");
			// make new link current link
			newLink.ariaCurrent = true;

			// scroll to new li
			newLi.scrollIntoView({ behavior: "smooth", inline: "center" });
		}
	}
	
	// if arrow left is pressed 	
	else if (pressedKey == "ArrowLeft") {
		event.preventDefault();

		const currentLink = document.querySelector("nav a[aria-current='true']");
		const newLink = currentLink.previousElementSibling;
		if (newLink) {
			const newLi = document.querySelector("ol li" + newLink.hash);

            const newBg = newLi.dataset.bg;
            bgimage.dataset.map = newBg;
			

			currentLink.removeAttribute("aria-current");
			newLink.ariaCurrent = true;
			newLi.scrollIntoView({ behavior: "smooth", inline: "center" });
		}
	}
	
}


// funties die worden aangeroepen gekoppeld aan de CSS 
// waardoor de afbeelding wordt aangepast.

function functieafbeelding1(event) {
    var newLink = event.target;
    var currentLink = document.querySelector("a[aria-current='true']");

    currentLink.removeAttribute("aria-current");
    newLink.ariaCurrent = "true";

    bgimage.dataset.map = "image1";

    console.log("hoi");
}

function functieafbeelding2(event) {
    var newLink = event.target;
    var currentLink = document.querySelector("a[aria-current='true']");

    currentLink.removeAttribute("aria-current");
    newLink.ariaCurrent = "true";

    bgimage.dataset.map = "image2";

    console.log("hoi2");
}

function functieafbeelding3(event) {
    var newLink = event.target;
    var currentLink = document.querySelector("a[aria-current='true']");

    currentLink.removeAttribute("aria-current");
    newLink.ariaCurrent = "true";

    bgimage.dataset.map = "image3";

    console.log("hoi3");
}

function functieafbeelding4(event) {
    var newLink = event.target;
    var currentLink = document.querySelector("a[aria-current='true']");

    currentLink.removeAttribute("aria-current");
    newLink.ariaCurrent = "true";

    bgimage.dataset.map = "image4";

    console.log("hoi4");
}

function functieafbeelding5(event) {
    var newLink = event.target;
    var currentLink = document.querySelector("a[aria-current='true']");

    currentLink.removeAttribute("aria-current");
    newLink.ariaCurrent = "true";

    bgimage.dataset.map = "image5";

    console.log("hoi5");
}


var slideIndex = 1;

function slide(n) {
  showSlides(slideIndex += n);
}

//////////////////////
/////// AUDIO ///////
//////////////////////
// audio afspelen bij hoveren

hoverArea1.addEventListener('mouseover', () => {
    audioElement1.play();
});

hoverArea1.addEventListener('mouseout', () => {
    audioElement1.pause();
    audioElement1.currentTime = 0;
});

// 2

hoverArea2.addEventListener('mouseover', () => {
    audioElement2.play();
});

hoverArea2.addEventListener('mouseout', () => {
    audioElement2.pause();
    audioElement2.currentTime = 0;
});

// 3

hoverArea3.addEventListener('mouseover', () => {
    audioElement3.play();
});

hoverArea3.addEventListener('mouseout', () => {
    audioElement3.pause();
    audioElement3.currentTime = 0;
});

// 4

hoverArea4.addEventListener('mouseover', () => {
    audioElement4.play();
});

hoverArea4.addEventListener('mouseout', () => {
    audioElement4.pause();
    audioElement4.currentTime = 0;
});

// 5

hoverArea5.addEventListener('mouseover', () => {
    audioElement5.play();
});

hoverArea5.addEventListener('mouseout', () => {
    audioElement5.pause();
    audioElement5.currentTime = 0;
});

//////////////////////
/////// DIALOGS //////
//////////////////////

//  OPEN/CLOSE THE INTRO DIALOG

// get the dialog and store it in a constant
const dialog = document.querySelector("dialog");

// open the dialog when the page is loaded
dialog.showModal();

// close the dialog if clicked on the overlay
function lightDismiss (event) {
	const clickedElement = event.target;
	// not true if clicked on form in dialog
	if (clickedElement.nodeName == 'DIALOG') {
		dialog.close();
	}
}

dialog.addEventListener('click', lightDismiss);


// Hulp gehad van chat gpt om dingen mogelijk te maken

///////////1////////////
// OPEN/CLOSE THE PUZZEL

const puzzelOpenButton1 = document.querySelector("#element1 .cover1");
const puzzelDialog1 = document.querySelector("#element1 .elements");

puzzelOpenButton1.addEventListener("click", openPuzzelDialog1);

function openPuzzelDialog1() {
    puzzelDialog1.showModal();

    setTimeout(() => {
        puzzelDialog1.classList.add("big");
    }, 100);
}

function startAnimation1() {
    var button = document.querySelector('#element1 .go_info1');
    button.classList.add('animate-move1');
}

// OPEN/CLOSE THE INFO

const infoOpenButton1 = document.querySelector("#element1 .go_info1");
const infoDialog1 = document.querySelector("#element1 .informations");

infoOpenButton1.addEventListener("click", openInfoDialog1);

function openInfoDialog1(event) {
    event.preventDefault(); // Voorkom de standaardactie van de knop
    startAnimation1();

    setTimeout(() => {
        puzzelDialog1.close(); // Sluit de huidige dialoog
        infoDialog1.showModal();
        console.log("ik ga open!");
        newLi.scrollIntoView({ behavior: "smooth", inline: "center" });
    }, 1800);
}



///////////2////////////
// OPEN/CLOSE THE PUZZEL

const puzzelOpenButton2 = document.querySelector("#element2 .cover2");
const puzzelDialog2 = document.querySelector("#element2 .elements");

puzzelOpenButton2.addEventListener("click", openPuzzelDialog2);

function openPuzzelDialog2() {
	puzzelDialog2.showModal();

    setTimeout(() => {
        puzzelDialog2.classList.add("big");
    }, 100);
}

function startAnimation2() {
    var button = document.querySelector('#element2 .go_info2');
    button.classList.add('animate-move2');
}

// OPEN/CLOSE THE INFO

const infoOpenButton2 = document.querySelector("#element2 .go_info2");
const infoDialog2 = document.querySelector("#element2 .informations");

infoOpenButton2.addEventListener("click", openInfoDialog2);

function openInfoDialog2(event) {
    event.preventDefault(); // Voorkom de standaardactie van de knop
    startAnimation2();

    setTimeout(() => {
        puzzelDialog2.close(); // Sluit de huidige dialoog
        infoDialog2.showModal();
        console.log("ik ga open!");
        newLi.scrollIntoView({ behavior: "smooth", inline: "center" });
    }, 1800);
}

///////////3////////////
// OPEN/CLOSE THE PUZZEL

const puzzelOpenButton3 = document.querySelector("#element3 .cover3");
const puzzelDialog3 = document.querySelector("#element3 .elements");

puzzelOpenButton3.addEventListener("click", openPuzzelDialog3);

function openPuzzelDialog3() {
	puzzelDialog3.showModal();

    setTimeout(() => {
        puzzelDialog3.classList.add("big");
    }, 100);
}

function startAnimation3() {
    var button = document.querySelector('#element3 .go_info3');
    button.classList.add('animate-move3');
}

// OPEN/CLOSE THE INFO

const infoOpenButton3 = document.querySelector("#element3 .go_info3");
const infoDialog3 = document.querySelector("#element3 .informations");

infoOpenButton3.addEventListener("click", openInfoDialog3);

function openInfoDialog3(event) {
    event.preventDefault(); // Voorkom de standaardactie van de knop
    startAnimation3();

    setTimeout(() => {  
        puzzelDialog3.close(); // Sluit de huidige dialoog
        infoDialog3.showModal();
        console.log("ik ga open!");
        newLi.scrollIntoView({ behavior: "smooth", inline: "center" });
    }, 1800);
}

///////////4////////////
// OPEN/CLOSE THE PUZZEL

const puzzelOpenButton4 = document.querySelector("#element4 .cover4");
const puzzelDialog4 = document.querySelector("#element4 .elements");

puzzelOpenButton4.addEventListener("click", openPuzzelDialog4);

function openPuzzelDialog4() {
	puzzelDialog4.showModal();

    setTimeout(() => {
        puzzelDialog4.classList.add("big");
    }, 100);
}

function startAnimation4() {
    var button = document.querySelector('#element4 .go_info4');
    button.classList.add('animate-move4');
}

// OPEN/CLOSE THE INFO

const infoOpenButton4 = document.querySelector("#element4 .go_info4");
const infoDialog4 = document.querySelector("#element4 .informations");

infoOpenButton4.addEventListener("click", openInfoDialog4);

function openInfoDialog4(event) {
    event.preventDefault(); // Voorkom de standaardactie van de knop
    startAnimation4();

    setTimeout(() => {
        puzzelDialog4.close(); // Sluit de huidige dialoog
        infoDialog4.showModal();
        console.log("ik ga open!");
        newLi.scrollIntoView({ behavior: "smooth", inline: "center" });
    }, 1800);
}

///////////5////////////
// OPEN/CLOSE THE PUZZEL

const puzzelOpenButton5 = document.querySelector("#element5 .cover5");
const puzzelDialog5 = document.querySelector("#element5 .elements");

puzzelOpenButton5.addEventListener("click", openPuzzelDialog5);

function openPuzzelDialog5() {
	puzzelDialog5.showModal();

    setTimeout(() => {
        puzzelDialog5.classList.add("big");
    }, 100);
}

function startAnimation5() {
    var button = document.querySelector('#element5 .go_info5');
    button.classList.add('animate-move5');
}

// OPEN/CLOSE THE INFO

const infoOpenButton5 = document.querySelector("#element5 .go_info5");
const infoDialog5 = document.querySelector("#element5 .informations");

infoOpenButton5.addEventListener("click", openInfoDialog5);

function openInfoDialog5(event) {
    event.preventDefault(); // Voorkom de standaardactie van de knop
    startAnimation5();

    setTimeout(() => {
        puzzelDialog5.close(); // Sluit de huidige dialoog
        infoDialog5.showModal();
        console.log("ik ga open!");
        newLi.scrollIntoView({ behavior: "smooth", inline: "center" });
    }, 1800);
}