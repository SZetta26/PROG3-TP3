const { useState } = React;

function App() {
  const [numero01, setNumero01]= useState("");
  const [numero02, setNumero02]= useState("");
  const [operacion, setOperacion]= useState("SUMA");
  const [resultado, setResultado]= useState(null);

  const calcular = () => {
    let respuesta;
    switch (operacion) {
      case "SUMA":  respuesta = numero01 + numero02; break;
      case "RESTA": respuesta = numero01 - numero02; break;
      case "MULT":  respuesta = numero01 * numero02; break;
      case "DIV":   respuesta = numero01 / numero02; break;
      default: respuesta = "Operación inválida";
    }
    setResultado(respuesta);
  };

  const noCalcular = !(operacion === "DIV" && numero02 === 0);

  return (
    <>
      <h2>CALCULADORA BÁSICA (REACT)</h2>
      <label>
        Ingrese primer numero:
        <input
          type="number"
          value={numero01}
          onChange={e => setNumero01(Number(e.target.value))}/>
      </label>
        <br /><br />
      <label>
        Ingrese segundo numero:
        <input
          type="number"
          value={numero02}
          onChange={e => setNumero02(Number(e.target.value))}/>
      </label>
        <br /><br /><br/>
      <label>
        Operación:
        <select
          value={operacion}
          onChange={e => setOperacion(e.target.value)}>
          <option value="SUMA">Suma</option>
          <option value="RESTA">Resta</option>
          <option value="MULT">Multiplicacion</option>
          <option value="DIV">Division</option>
        </select>
      </label>

      <button 
        onClick={calcular}
        disabled={!noCalcular}>CALCULAR</button>

      {resultado !== null && (
        <h2>Resultado: {resultado}</h2>
      )}
    </>
  );
}