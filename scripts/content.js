const allParagraphs = document.querySelectorAll("p");
const allCodes = document.querySelectorAll("code");
const onSelect = (ev) => {
	console.log("selected el:", ev.target.innerText);
	console.log("location:", window.location.href);
};

allParagraphs.forEach((paragh) => {
	//paragh.style = "background-color: yellow;";
	paragh.addEventListener("click", onSelect);
});

allCodes.forEach((code) => {
	//code.style = "background-color: yellow;";
	code.addEventListener("select", onSelect);
});
