const seleccionar= document.getElementById("operaciones");
const numero2= document.getElementById("num02");
const boton= document.getElementById("boton");

function checkDisable() {
    boton.disabled = (seleccionar.value === "DIV" && numero2.value === "0");
}

seleccionar.addEventListener("change", checkDisable);
numero2.addEventListener("input", checkDisable);

function takeValue() {
    const n1 = parseFloat(document.getElementById("num01").value);
    const n2 = parseFloat(numero2.value);
    let resultado;

  switch (seleccionar.value) {
    case "SUMA":
      resultado = n1 + n2;
    break;
    case "RESTA":
      resultado = n1 - n2;
          break;
    case "MULT":
      resultado = n1 * n2;
    break;
    case "DIV":
      resultado = n1 / n2;
    break;
    default:
        resultado = "Operación no válida";
      }    

document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
    }      
