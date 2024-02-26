var cat = document.getElementById("cat")
var cow = document.getElementById("cow")
var dog = document.getElementById("dog")
var goat = document.getElementById("goat")
var horse = document.getElementById("horse")
var pig = document.getElementById("pig")
var sheep = document.getElementById("sheep")
var animal = ""


// COOKIES

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  
  function checkCookie() {
    let user = getCookie(animal);
    if (user != "") {
    } else {
      if (user != "" && user != null) {
        setCookie(animal, animal, 365);
      }
    }
  }


  function printCookie(){
    getCookie(animal)
    alert(getCookie(animal))
    if (getCookie(animal)=="cat"){document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958208184/";document.querySelector("h1").textContent="Cat"}
    else if(getCookie(animal)=="cow"){document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/885605066/";document.querySelector("h1").textContent="Cow"}
    else if(getCookie(animal)=="dog"){document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/956478923/";document.querySelector("h1").textContent="Dog"}
    else if(getCookie(animal)=="goat"){document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958088760/";document.querySelector("h1").textContent="Goat"}
    else if(getCookie(animal)=="horse"){document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958052578/";document.querySelector("h1").textContent="Horse"}
    else if(getCookie(animal)=="pig"){document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958201981/";document.querySelector("h1").textContent="Pig"}
    else if(getCookie(animal)=="sheep"){document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/957935575/";document.querySelector("h1").textContent="Sheep"}
    // else{document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958208184/";document.querySelector("h1").textContent="Cat"}
  }




cat.addEventListener("click",()=>{
    animal="cat"
    setCookie(animal,animal,365)
    
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958208184/"
    document.querySelector("h1").textContent="Cat"
})
cow.addEventListener("click",()=>{
    animal="cow"
    setCookie(animal,animal,365)
    
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/885605066/"
    document.querySelector("h1").textContent="Cow"
})
dog.addEventListener("click",()=>{
    animal="dog"
    setCookie(animal,animal,365)
    
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/956478923/"
    document.querySelector("h1").textContent="Dog"
})
goat.addEventListener("click",()=>{
    animal="goat"
    setCookie(animal,animal,365)
    
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958088760/"
    document.querySelector("h1").textContent="Goat"
})
horse.addEventListener("click",()=>{
    animal="horse"
    setCookie(animal,animal,365)
    
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958052578/"
    document.querySelector("h1").textContent="Horse"
})
pig.addEventListener("click",()=>{
    animal="pig"
    setCookie(animal,animal,365)
    
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/958201981/"
    document.querySelector("h1").textContent="Pig"
})
sheep.addEventListener("click",()=>{
    animal="sheep"
    setCookie(animal,animal,365)
    
    document.querySelector("iframe").src ="https://scratch.mit.edu/projects/embed/957935575/"
    document.querySelector("h1").textContent="Sheep"
})



document.onload = printCookie();
