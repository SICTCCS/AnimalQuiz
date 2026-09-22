function attachAnimalHandlers() {
    const cat = document.getElementById("cat");
    const cow = document.getElementById("cow");
    const dog = document.getElementById("dog");
    const goat = document.getElementById("goat");
    const externalHorse = document.getElementById("externalHorse");
const anatomicalHorse = document.getElementById("anatomicalHorse");
    const pig = document.getElementById("pig");
    const bird = document.getElementById("bird");
    const sheep = document.getElementById("sheep");
    const gameFrame = document.querySelector("iframe");
    const animalTitle = document.getElementById("title");

if (!cat || !cow || !dog || !goat || !externalHorse || !anatomicalHorse || !pig || !bird || !sheep || !gameFrame || !animalTitle) {
        console.log("One or more elements not found. Event listeners not attached.");
        return;
    }

    const setAnimal = (name, embedUrl) => {
        gameFrame.src = embedUrl;
        animalTitle.textContent = name;
        console.log(`Animal set to: ${name}`);
    };

    cat.addEventListener("click", () => setAnimal("Cat", "https://scratch.mit.edu/projects/embed/958208184/"));
    cow.addEventListener("click", () => setAnimal("Cow", "https://scratch.mit.edu/projects/embed/885605066/"));
    dog.addEventListener("click", () => setAnimal("Dog", "https://scratch.mit.edu/projects/embed/956478923/"));
    goat.addEventListener("click", () => setAnimal("Goat", "https://scratch.mit.edu/projects/embed/958088760/"));
    externalHorse.addEventListener("click", () => setAnimal("External Horse", "https://scratch.mit.edu/projects/embed/958052578/"));
    anatomicalHorse.addEventListener("click", () => setAnimal("Anatomical Horse", "https://scratch.mit.edu/projects/embed/1379912909/"));
    pig.addEventListener("click", () => setAnimal("Pig", "https://scratch.mit.edu/projects/embed/958201981/"));
    bird.addEventListener("click", () => setAnimal("Bird", "https://scratch.mit.edu/projects/embed/1376020919/"));
    sheep.addEventListener("click", () => setAnimal("Sheep", "https://scratch.mit.edu/projects/embed/957935575/"));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachAnimalHandlers);
} else {
    attachAnimalHandlers();
}
