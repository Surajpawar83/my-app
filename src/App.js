function App() {
  // Data Members
  let project = "Counter Application";
  let btnValue = "Click mee";

  // Member :: Type is Functions
  let clickme = () => alert();
  let increment = () => {};
  let decrement = () => {};

  return (
    <div>
      <h1> {project} </h1>
      <input type="button" value={btnValue} onClick={clickme} />

      <input type="button" value="increment" onClick={increment} />
    </div>
  );
}

export default App;
