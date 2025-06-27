const lista = [
  "Argentina", "Brasil", "Chile", "Colombia", "Ecuador",
  "Noruega", "Jamaica", "China", "Marruecos", "Francia",
  "Alemania", "Italia", "Tailandia", "Estonia", "India",
  "Australia", "Irlanda", "Egipto", "Rusia", "Israel"
];

const boton = document.querySelector("button[type='button']");
const input = document.querySelector("input[type='text']");
const resultado = document.getElementById("resultado");
const listaElemento = document.getElementById("lista");

boton.addEventListener("click", () => {
  const busqueda = input.value.toLowerCase();
  listaElemento.innerHTML = "";

  if (!busqueda) {
    resultado.textContent = "ERROR: Campo vacío!";
    return;
  }

  const coincidencias = lista.filter(elemento =>
    elemento.toLowerCase().includes(busqueda)
  );

  if (coincidencias.length) {
    resultado.textContent = "Coincidencias encontradas: ";
    coincidencias.forEach(elemento => {
      const li = document.createElement("li");
      li.textContent = elemento;
      listaElemento.appendChild(li);
    });
  } else {
    resultado.textContent = "No se encontraron coincidencias! ";
  }
});