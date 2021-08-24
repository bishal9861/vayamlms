const inputs = document.querySelectorAll(".input");
var x;


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


function movetoNext(previousFieldID, current, nextFieldID, event) {
	var x = event.keyCode;
		if (current.value.length >= current.maxLength) {
			if (x >= 96 && x <= 105) {
				document.getElementById(nextFieldID).focus();
			}
		}
		if (x == 8) {
			if (current.value.length == 0) {
				document.getElementById(previousFieldID).focus();
			}
	}
}



