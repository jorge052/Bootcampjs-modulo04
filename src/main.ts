import "./style.css";

const numeroTurno0 = document.getElementById(
  "numero-turno"
) as HTMLHeadingElement | null;
let numeroTurno: string = "";
if (numeroTurno0) {
  numeroTurno = numeroTurno0.innerText;
} else {
  numeroTurno = "";
}

const botonAnterior = document.getElementById(
  "botonAnterior"
) as HTMLButtonElement;
const botonSiguiente = document.getElementById(
  "botonSiguiente"
) as HTMLButtonElement;
const botonReset = document.getElementById("reset") as HTMLButtonElement;
const inputTurno = document.getElementById("inputTurno") as HTMLInputElement;
const botonCambiarTurno = document.getElementById(
  "botonCambiarTurno"
) as HTMLButtonElement;

// Variable para guardar el turno actual
let turnoActual = 0;

// Funcion para actualizar el numero de turno
function actualizarTurnoDisplay() {
  numeroTurno = turnoActual.toString();
  if (numeroTurno0) {
    numeroTurno0.innerText = numeroTurno;
  }
}

//  Hacer clic en el botón "Siguiente"
botonSiguiente.addEventListener("click", function () {
  turnoActual++;
  actualizarTurnoDisplay();
});

// Hacer clic en el botón "Anterior"
botonAnterior.addEventListener("click", function () {
  turnoActual = Math.max(0, turnoActual - 1);
  actualizarTurnoDisplay();
});

// Hacer clic en el botón "Reset"
botonReset.addEventListener("click", function () {
  turnoActual = 0;
  actualizarTurnoDisplay();
});

// Evento al hacer clic en el botón "Cambiar Turno"
botonCambiarTurno.addEventListener("click", function() {
  const nuevoTurno = parseInt(inputTurno.value);
  if (!isNaN(nuevoTurno)) {
    turnoActual = Math.max(0, nuevoTurno);
    actualizarTurnoDisplay();
  }
});
