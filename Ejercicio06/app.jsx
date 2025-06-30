const { useState } = React;

function App() {
  const [peso, setPeso]= useState("");
  const [altura, setAltura]= useState("");
  const [resultado, setResultado]= useState(null);
  const [mensajeImc, setMensajeImc]= useState(null);
  const [colorMensaje, setColorMensaje] = useState("");


  const calcular = () => {
    if (peso > 0 && altura > 0) {
  const imc = (peso / ((altura/100) ** 2)).toFixed(2);
  setResultado(imc);
        if (imc < 18.5) {
        setMensajeImc("Bajo peso");
        setColorMensaje("yellow");
      } else if (imc >= 18.5 && imc < 24.9) {
        setMensajeImc("Peso normal");
        setColorMensaje("green");
      } else if (imc >= 25 && imc < 29.9) {
        setMensajeImc("Sobrepeso");
        setColorMensaje("orange");
      } else {
        setMensajeImc("Obesidad");
        setColorMensaje("red");
      }
    } 
    else {
        alert("Error, ingrese valores validos!");
    }
  }
  return (
    <>
      <form>
      <h2>CALCULADORA IMC</h2>
      <label>
        Ingrese su peso (en Kilogramos):
        <input
          type="number"
          value={peso}
          onChange={e => setPeso(Number(e.target.value))}
          required/>
      </label>
        <br /><br />
      <label>
        Ingrese su altura (en Centimetros):
        <input
          type="number"
          value={altura}
          onChange={e => setAltura(Number(e.target.value))}/>
      </label>
        <br /><br /><br/>
      <button type="button"
        onClick={calcular}>CALCULAR</button>
      </form>


      {resultado !== null && (
        <h2>Resultado: {resultado}</h2>
      )}
       <h2 style={{ color: colorMensaje }}>{mensajeImc}</h2>
    </>
  );
}
