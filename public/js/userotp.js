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
	if (x >= 96 && x <= 105 || x==8) {
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
}



// document.getElementById('text1').onkeydown = function() {
// 	if ( this.value.length == this.maxLength)
// 	 document.getElementById('text2').focus();
//   }
// document.getElementById('text2').onkeydown = function() {
// 	if (this.value.length == this.maxLength)
// 	 document.getElementById('text3').focus();
//   }
// document.getElementById('text3').onkeydown = function() {
// 	if (this.value.length == this.maxLength)
// 	 document.getElementById('text4').focus();
//   }