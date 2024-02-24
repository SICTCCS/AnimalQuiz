var cat = document.getElementById("cat")
var cow = document.getElementById("cow")
var dog = document.getElementById("dog")
var goat = document.getElementById("goat")
var horse = document.getElementById("horse")
var pig = document.getElementById("pig")
var sheep = document.getElementById("sheep")
var animal = ""



cat.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958208184/"
    document.querySelector("h1").textContent="Cat"
    animal="cat"
})
cow.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/885605066/"
    document.querySelector("h1").textContent="Cow"
    animal="cow"
})
dog.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/956478923/"
    document.querySelector("h1").textContent="Dog"
    animal="dog"
})
goat.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958088760/"
    document.querySelector("h1").textContent="Goat"
    animal="goat"
})
horse.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958052578/"
    document.querySelector("h1").textContent="Horse"
    animal="horse"
})
pig.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958201981/"
    document.querySelector("h1").textContent="Pig"
    animal="pig"
})
sheep.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/957935575/"
    document.querySelector("h1").textContent="Sheep"
    animal="sheep"
    alert(animal)
})

