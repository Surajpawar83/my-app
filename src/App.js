function App() {
  let clickMe1 = () => {
    console.log("Hello");
  };

  let clickMe2 = (e) => {
    console.log(e);
  };

  let clickMe3 = (p1) => {
    console.log(p1);
  };

  let clickMe4 = (e, p1) => {
    console.log(e, p1);
  };

  return (
    <div>
      <h1>btn Click demo</h1>

      <input type="button" value="Click me 1" onClick={clickMe1} />

      <input type="button" value="Click me 2" onClick={clickMe2} />

      <input
        type="button"
        value="Click me 3"
        onClick={() => clickMe3("primary")}
      />

      <input
        type="button"
        value="Click me 3"
        onClick={() => clickMe3("danger")}
      />

      <input
        type="button"
        value="Click me 4"
        onClick={(e) => clickMe4(e, "ASCH LIHL AHE")}
      />
    </div>
  );
}

export default App;
