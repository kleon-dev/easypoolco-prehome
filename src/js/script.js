// * navbar
const button = document.querySelector(".buttonBar");

button.addEventListener('click', ()=>{
   const div = document.querySelector('.divInfo');
   let checkbox = document.getElementById("checkbox");
   let divx = document.getElementById('div-of-x');
   
   if (div.style.display != "flex") {
      checkbox.checked = true;
      div.style.display = "flex";
      divx.style.display = "block";
   } else if (div.style.display == "flex") {
      checkbox.checked = false;
      div.style.display = "none";
      divx.style.display = "none";
   } else if (checkbox.checked && div.style.display != "flex") {
      checkbox.checked = true;
      div.style.display = "flex";
      divx.style.display = "block";
   }

});


const divXout = document.getElementById('div-of-x');

divXout.addEventListener('click', () => {
   const div = document.querySelector('.divInfo');
   div.style.display = "none";
   divXout.style.display = "none";
});

const anchors = document.querySelectorAll(".a");

anchors.forEach((anchor) => {
   const div = document.querySelector('.divInfo');
   
   anchor.addEventListener("click", () => {
      div.style.display = "none";
      divXout.style.display = "none";
   });
});


ScrollReveal().reveal(".reveal-element1", {delay: 200, distance: '20px', duration: 2500, origin: 'bottom'});
ScrollReveal().reveal(".reveal-element2", {delay: 200, distance: '15px', duration: 2500, origin: 'top'})

let contactButton = document.querySelector(".button-contact");
contactButton.onclick = () => {

}

/* ?
?   transform: scale(0.7);
?   background: linear-gradient(to left, blue, rgb(0, 149, 255));
*/