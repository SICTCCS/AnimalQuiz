// Connect the game buttons after the page loads
function attachAnimalHandlers() {
	// Find the game area
	const gameFrame = document.querySelector("iframe");
	const animalTitle = document.getElementById("title");

	// Change the Scratch game and title
	const setAnimal = (name, embedUrl) => {
		gameFrame.src = embedUrl;
		animalTitle.textContent = name;
	};

	// Find each game button
	const cat = document.getElementById("cat");
	const cow = document.getElementById("cow");
	const dog = document.getElementById("dog");
	const directionalDog = document.getElementById("directionalDog");
	const goat = document.getElementById("goat");
	const externalHorse = document.getElementById("externalHorse");
	const directionalHorse = document.getElementById("directionalHorse");
	const pig = document.getElementById("pig");
	const bird = document.getElementById("bird");
	const sheep = document.getElementById("sheep");
	const tooth = document.getElementById("tooth");

	// Only connect buttons that are on the page
	if (cat) cat.addEventListener("click", () => setAnimal("Cat", "https://scratch.mit.edu/projects/958208184/embed"));
	if (cow) cow.addEventListener("click", () => setAnimal("Cow", "https://scratch.mit.edu/projects/885605066/embed"));
	if (dog) dog.addEventListener("click", () => setAnimal("Dog", "https://scratch.mit.edu/projects/956478923/embed"));
	if (directionalDog) directionalDog.addEventListener("click", () => setAnimal("Directional Dog", "https://scratch.mit.edu/projects/1376949089/embed"));
	if (goat) goat.addEventListener("click", () => setAnimal("Goat", "https://scratch.mit.edu/projects/958088760/embed"));
	if (externalHorse) externalHorse.addEventListener("click", () => setAnimal("External Horse", "https://scratch.mit.edu/projects/958052578/embed"));
	if (directionalHorse) directionalHorse.addEventListener("click", () => setAnimal("Directional Horse", "https://scratch.mit.edu/projects/1379912909/embed"));
	if (pig) pig.addEventListener("click", () => setAnimal("Pig", "https://scratch.mit.edu/projects/958201981/embed"));
	if (bird) bird.addEventListener("click", () => setAnimal("Bird", "https://scratch.mit.edu/projects/1376020919/embed"));
	if (sheep) sheep.addEventListener("click", () => setAnimal("Sheep", "https://scratch.mit.edu/projects/957935575/embed"));
	if (tooth) tooth.addEventListener("click", () => setAnimal("Tooth", "https://scratch.mit.edu/projects/1369683004/embed"));
}

// Wait until the page is ready
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", attachAnimalHandlers);
} else {
	attachAnimalHandlers();
}


// Find every dropdown on the page
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");

    // Open or close the dropdown
    select.addEventListener("click", () => {

        // Close all other dropdowns
        dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.querySelector(".select").classList.remove("select-clicked");
                otherDropdown.querySelector(".caret").classList.remove("caret-rotate");
                otherDropdown.querySelector(".menu").classList.remove("menu-open");
            }
        });

        // Open this dropdown
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate");
        menu.classList.toggle("menu-open");
    });

    // Change the selected option
    options.forEach(option => {
        option.addEventListener("click", () => {
            // selected.innerText = option.innerText;

            select.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");
            menu.classList.remove("menu-open");

            options.forEach(option => option.classList.remove("active"));
            option.classList.add("active");
        });
    });
});

// Controls the curtain page transition
barba.init({
	transitions: [
		{
			name: "curtain-transition",

			// Cover the old page
			async leave() {
				await gsap.to(".transition-curtain", {
					xPercent: 100,
					duration: 0.6,
					ease: "power2.inOut"
				});
			},

			// Reveal the new page
			async enter() {
				await gsap.to(".transition-curtain", {
					xPercent: 200,
					duration: 0.6,
					ease: "power2.inOut"
				});

				gsap.set(".transition-curtain", {
					xPercent: 0
				});
			}
		}
	]
});

