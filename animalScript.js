var cat = document.getElementById("cat")
var cow = document.getElementById("cow")
var dog = document.getElementById("dog")
var goat = document.getElementById("goat")
var horse = document.getElementById("horse")
var pig = document.getElementById("pig")
var sheep = document.getElementById("sheep")

cat.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958208184/"
    document.querySelector("h1").textContent="Cat"
})
cow.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/885605066/"
    document.querySelector("h1").textContent="Cow"
})
dog.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/956478923/"
    document.querySelector("h1").textContent="Dog"
})
goat.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958088760/"
    document.querySelector("h1").textContent="Goat"
})
horse.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958052578/"
    document.querySelector("h1").textContent="Horse"
})
pig.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958201981/"
    document.querySelector("h1").textContent="Pig"
})
sheep.addEventListener("click",()=>{
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/957935575/"
    document.querySelector("h1").textContent="Sheep"
})