// Initializing List for random password
let randomPassword = ["a","b","c","d","e","f","g","h","1","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*"]
// Getting the class using the DOM
let rand1 = document.querySelector(".random1");
let rand2 = document.querySelector(".random2");
let rand3 = document.querySelector(".random3");
let rand4 = document.querySelector(".random4");
// Function that generates the password
const generateRandomPassword = () =>{
    let random1, random2, random3, random4
    rand1.textContent = ""
    rand2.textContent = ""
    rand3.textContent = ""
    rand4.textContent = ""
     for(let i = 0; i < 15; i++){
         random1 = Math.floor(Math.random()*randomPassword.length);
         rand1.textContent += randomPassword[random1]
         random2 = Math.floor(Math.random()*randomPassword.length);
         rand2.textContent += randomPassword[random2]
         random3 = Math.floor(Math.random()*randomPassword.length);
         rand3.textContent += randomPassword[random3]
         random4 = Math.floor(Math.random()*randomPassword.length);
         rand4.textContent += randomPassword[random4]
     }
     return rand1, rand2, rand3, rand4
}