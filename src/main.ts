import "./style.css";

let numeroTurno: number = 0;

const inicio = () => {
  const numeroTurno0 = document.getElementById("numero-turno");
  if (numeroTurno0) {
    numeroTurno0.innerText = numeroTurno.toString().padStart(2, "0");
  } else {
    console.error("error");
  }
};

document.addEventListener("DOMContentLoaded", inicio);

const botonAnterior = document.getElementById("botonAnterior");

const botonSiguiente = document.getElementById("botonSiguiente");

const botonReset = document.getElementById("reset");

const inputTurno = document.getElementById("inputTurno");

const botonCambiarTurno = document.getElementById("botonCambiarTurno");

if (botonAnterior instanceof HTMLButtonElement) {
  botonAnterior.addEventListener("click", function () {
    numeroTurno = Math.max(0, numeroTurno - 1);
    inicio();
  });
} else {
  console.error("error");
}

if (botonSiguiente instanceof HTMLButtonElement) {
  botonSiguiente.addEventListener("click", function () {
    numeroTurno++;
    inicio();
  });
} else {
  console.error("error");
}

if (botonReset instanceof HTMLButtonElement) {
  botonReset.addEventListener("click", function () {
    numeroTurno = 0;
    inicio();
  });
} else {
  console.error("error");
}

if (
  inputTurno instanceof HTMLInputElement &&
  botonCambiarTurno instanceof HTMLButtonElement
) {
  botonCambiarTurno.addEventListener("click", function () {
    const nuevoTurno = parseInt(inputTurno.value);
    if (!isNaN(nuevoTurno)) {
      numeroTurno = Math.max(0, nuevoTurno);
      inicio();
    } else {
      console.error("error");
    }
  });
}
