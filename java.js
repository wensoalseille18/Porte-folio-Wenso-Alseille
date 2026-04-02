
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
    
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});


  
