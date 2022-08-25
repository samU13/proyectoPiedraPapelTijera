"use stric";
let [ordenador_score, user_score] = [0, 0];
const resultado = document.getElementById("resultado");
let posiblesResultados = {
  piedra: {
    piedra: "draw",
    tijera: "win",
    papel: "lose",
  },
  tijera: {
    piedra: "lose",
    tijera: "draw",
    papel: "win",
  },
  papel: {
    piedra: "win",
    tijera: "lose",
    papel: "draw",
  },
};

function checker(input) {
  const opciones = ["piedra", "papel", "tijera"];
  let aleatorio = Math.floor(Math.random() * 3);

  document.getElementById(
    "ordenador_choice"
  ).innerHTML = ` El ordenador escogio <span> ${opciones[
    aleatorio
  ].toUpperCase()} </span>`;

  document.getElementById(
    "user_choice"
  ).innerHTML = ` Tu escogiste <span> ${input.toUpperCase()} </span>`;

  let ordenador_choice = opciones[aleatorio];

  switch (posiblesResultados[input][ordenador_choice]) {
    case "win":
      resultado.style.cssText = "background-color: #cefdce; color: #689f38";
      resultado.innerHTML = "HAS GANADO!";
      user_score++;
      break;
    case "lose":
      resultado.style.cssText = "background-color: #ffdde0; color: #d32f2f";
      resultado.innerHTML = "HAS PERDIDO! PRINGAO!";
      ordenador_score++;
      break;
    default:
      resultado.style.cssText = "background-color: #e5e5e5; color: #808080";
      resultado.innerHTML = "EMPATE";
      break;
  }
  document.getElementById("ordenador_score").innerHTML = ordenador_score;
  document.getElementById("user_score").innerHTML = user_score;
}
