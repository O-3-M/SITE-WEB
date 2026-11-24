// Donne à chaque membre sa couleur (lue dans data-color du HTML)
const membres = document.querySelectorAll(".membre");
const compteur = document.getElementById("compteur");
let clics = 0;

membres.forEach(function (membre) {
  membre.style.setProperty("--couleur", membre.dataset.color);

  const cercle = membre.querySelector(".cercle");


  cercle.addEventListener("click", function () {
    membre.classList.toggle("ouvert");
    cercle.classList.toggle("actif");

    clics++;
    const nom = membre.querySelector("h2").textContent;
    compteur.textContent = nom + " sélectionné(e) - " + clics + " clic(s)";
  });
});
