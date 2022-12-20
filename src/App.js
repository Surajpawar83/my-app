import "./App.css";

function App() {
  let mystyle = { color: "white", background: "purple" };

  return (
    <div>
      <h1 className="beautify">Hello again!</h1>

      <h1 style={mystyle}>Hello world</h1>

      <h1 style={{ color: "white", backgroundColor: "red" }}>Hello</h1>
    </div>
  );
}

export default App;
