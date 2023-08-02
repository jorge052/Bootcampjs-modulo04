import "./style.css";

const numeroTurno0 = document.getElementById("numero-turno");

let numeroTurno: string = "";

if (numeroTurno0 instanceof HTMLHeadingElement) {
  numeroTurno = numeroTurno0.innerText;
} else {
  numeroTurno = "";
}

const botonAnterior = document.getElementById("botonAnterior");

const botonSiguiente = document.getElementById("botonSiguiente");

const botonReset = document.getElementById("reset");

const inputTurno = document.getElementById("inputTurno");

const botonCambiarTurno = document.getElementById("botonCambiarTurno");

if (botonAnterior instanceof HTMLButtonElement) {
  botonAnterior.addEventListener("click", function () {
    turnoActual = Math.max(0, turnoActual - 1);
    actualizarTurnoDisplay();
  });
}

if (botonSiguiente instanceof HTMLButtonElement) {
  botonSiguiente.addEventListener("click", function () {
    turnoActual++;
    actualizarTurnoDisplay();
  });
}

if (botonReset instanceof HTMLButtonElement) {
  botonReset.addEventListener("click", function () {
    turnoActual = 0;
    actualizarTurnoDisplay();
  });
}

if (
  inputTurno instanceof HTMLInputElement &&
  botonCambiarTurno instanceof HTMLButtonElement
) {
  botonCambiarTurno.addEventListener("click", function () {
    const nuevoTurno = parseInt(inputTurno.value);
    if (!isNaN(nuevoTurno)) {
      turnoActual = Math.max(0, nuevoTurno);
      actualizarTurnoDisplay();
    }
  });
}

// Variable para guardar el turno actual
let turnoActual = 0;

// Funcion para actualizar el numero de turno
function actualizarTurnoDisplay() {
  numeroTurno = turnoActual.toString();
  if (numeroTurno0) {
    numeroTurno0.innerText = numeroTurno;
  }
}
