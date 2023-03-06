const textSelectedHandler = (ev) => {
	let selectedText = "";
	if (window.getSelection()) {
		selectedText = window.getSelection().toString();
		console.log("selected el:", ev.target);
		console.log("location:", window.location.href);
		console.log("Selected text:", selectedText);
	}
};

const allParagraphs = document.querySelectorAll("p");
const allCodes = document.querySelectorAll("code");

allParagraphs.forEach((paragh) => {
	//paragh.style = "background-color: yellow;";
	paragh.addEventListener("click", textSelectedHandler);
});

allCodes.forEach((code) => {
	//code.style = "background-color: yellow;";
	code.addEventListener("select", textSelectedHandler);
});
