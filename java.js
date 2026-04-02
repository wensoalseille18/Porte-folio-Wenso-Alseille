
const barres = document.querySelectorAll('.barre');
const burger = document.getElementById("burger");
const nav = document.getElementById("droite");
window.addEventListener('load', () => {
    barres.forEach(barre => {
        const pourcentage = barre.getAttribute('data-percent');
        const fill = barre.querySelector('.fill');

        
        setTimeout(() => {
            fill.style.width = pourcentage + "%";
        }, 300);
    });
    
const burger = document.querySelector(".burger");
const menu = document.querySelector(".droite");
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
});


  
