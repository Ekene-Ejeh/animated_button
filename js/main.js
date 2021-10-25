let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");

btn.onclick = function () {
	btnText.innerHTML = "Thanks";
	btn.classList.add("active");
};
