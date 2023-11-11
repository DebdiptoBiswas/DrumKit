for(var i = 0; i < document.querySelectorAll(".drum").length; i ++){
	document.querySelectorAll(".drum")[i].addEventListener("click", fnc);

}

function fnc(){
	if(this.innerHTML === "w"){
		var audio = new Audio("./sounds/crash.mp3");
		audio.play();
	}
	if(this.innerHTML === "a"){
		var audio = new Audio("./sounds/kick-bass.mp3");
		audio.play();
	}
	if(this.innerHTML === "s"){
		var audio = new Audio("./sounds/snare.mp3");
		audio.play();
	}
	if(this.innerHTML === "d"){
		var audio = new Audio("./sounds/tom-1.mp3");
		audio.play();
	}
	if(this.innerHTML === "j"){
		var audio = new Audio("./sounds/tom-2.mp3");
		audio.play();
	}
	if(this.innerHTML === "k"){
		var audio = new Audio("./sounds/tom-3.mp3");
		audio.play();
	}
	if(this.innerHTML === "l"){
		var audio = new Audio("./sounds/tom-4.mp3");
		audio.play();
	}
}

document.addEventListener("keydown",function(event){
	if(event.key === "w"){
		var audio = new Audio("./sounds/crash.mp3");
		audio.play();
	}
	if(event.key === "a"){
		var audio = new Audio("./sounds/kick-bass.mp3");
		audio.play();
	}
	if(event.key === "s"){
		var audio = new Audio("./sounds/snare.mp3");
		audio.play();
	}
	if(event.key === "d"){
		var audio = new Audio("./sounds/tom-1.mp3");
		audio.play();
	}
	if(event.key === "j"){
		var audio = new Audio("./sounds/tom-2.mp3");
		audio.play();
	}
	if(event.key === "k"){
		var audio = new Audio("./sounds/tom-3.mp3");
		audio.play();
	}
	if(event.key === "l"){
		var audio = new Audio("./sounds/tom-4.mp3");
		audio.play();
	}
})
