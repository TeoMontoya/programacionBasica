// Esta funcion le da un valor aleatorio a la eleccion de la pc
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//
function election(play) {
  let result = "";
  if (play == 1) {
    result = "piedra ✊";
  } else if (play == 2) {
    result = "papel 📄";
  } else if (play == 3) {
    result = "tijera ✂";
  } else {
    result = "UNA MALA DECISIÓN";
  }
  return result;
}

//vamos a determinar el ganador
function winner(pc, player) {
  if (player == pc) {
    alert(`Empate!`);
  } else if (
    (player == 1 && pc == 3) ||
    (player == 2 && pc == 1) ||
    (player == 3 && pc == 2)
  ) {
    alert(`GANASTE!!! 🎉🥳`);
  } else {
    alert(`Perdiste ☹😖`);
  }
}

let player = 0;
player = prompt("elige: 1 para ✊, 2 para 📄, 3 para ✂.");
pc = random(1, 3);

alert(`tú eliges ${election(player)}`);
alert(`PC elige ${election(pc)}`);

winner(pc, player);
