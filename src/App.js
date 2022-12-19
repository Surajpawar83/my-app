function App() {
  return (
    <div>
      <Person name="Rahul" />
      <Person name="Rohit" />
      <Person name="mahesh" />
      <Person name="prajwal" />
      <Person name="suraj" />
    </div>
  );
}

function Person({ name }) {
  return (
    <div>
      <img src="https://picsum.photos/400" alt="" />
      <h1>Person Name : {name} </h1>
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
