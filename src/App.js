//multi Tag

function App() {
  return (
    <div>
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
}

function Person() {
  return (
    <div>
      <img src="https://picsum.photos/400" alt="" />
      <h1>Person name</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        repellendus adipisci dignissimos tenetur possimus eaque architecto
        similique fugiat nisi alias error autem doloribus porro numquam harum,
        laudantium recusandae ut. Sint!
      </p>
    </div>
  );
}

export default App;
