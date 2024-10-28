const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble"); //ajout de la class bubble dans l'élément bubble
  document.body.appendChild(bubble); //body a un enfant qui est bubble

  const size = Math.random() * 200 + 100 + "px"; //Math.random = méthode qui permet de determiner une taille random des bulles.
  bubble.style.height = size; //hauteur est égal à size
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1; // = if, si Math.random est sup à 0.5 si oui tu renvoi 1 si non -1
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%"); //permet à la bulle d'aller dans tous les sens
  
bubble.addEventListener('click', () => {
  counter++;
  counterDisplay.textContent = counter; //counter donne sa valeur à counterDisplay
  bubble.remove();
})   // quand tu clique sur une bulle elle disparait

  setTimeout(() => {
    bubble.remove();
  }, 8000);             //au bout de 8 seconde la bulle disparait
  
};

setInterval(bubbleMaker, 1000); //créer tous les 3 dixième de seconde (300) / les 3 secondes (3000) de seconde une bulle
