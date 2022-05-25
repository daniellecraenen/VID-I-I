

// changing individual properties with code and using setInterval
var rotationSpeed = 0.05;
var rotationSpeed2 = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed && rotationSpeed2;
	myOtherBox.object3D.rotation.y += rotationSpeed && rotationSpeed2;
	
	console.log(myOtherBox.object3D.rotation.x);
	console.log(myOtherBox.object3D.rotation.y);
}

setInterval(spin, -16); //equivalent to 60 fps
