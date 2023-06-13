const burger_opn = document.getElementById("burger")
const menu_opn = document.getElementById("menu")

burger_opn.addEventListener("click", () => {
	if (menu_opn.classList.contains("hidden")) {
		menu_opn.classList.remove("hidden")
	} else {
		menu_opn.classList.add("hidden")
	}
})
