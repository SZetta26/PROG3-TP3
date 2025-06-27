function App() {

  const [isLeftDisabled, setLeftDisabled] = React.useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <button
        onClick={() => setLeftDisabled(true)}
        disabled={isLeftDisabled}
        style={{ marginRight: '5px' }}>IZQUIERDO</button>
      <button
        onClick={() => setLeftDisabled(false)}
        disabled={!isLeftDisabled}>DERECHO</button>
    </div>
  );
}