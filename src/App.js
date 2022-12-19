import { useState } from "react";

function App() {
  let str1 = "Home";
  let str2 = "Explore";
  let str3 = "Notification";

  let [counter, setCounter] = useState(1);

  let [city, setCity] = useState("mumbai");

  let changeCity = () => {
    city = "Hello " + city;

    setCity(city);
  };

  let increment = () => {
    counter++;
    console.log(counter);

    setCounter(counter);
  };

  return (
    <div>
      <h1>{city}</h1>
      <input type="button" value="change city" onClick={changeCity} />
      <hr />
      <h1>{str1}</h1>
      <h1>{str2}</h1>
      <h1>{str3}</h1>
      <h1>{counter}</h1>
      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}

export default App;
