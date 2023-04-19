import React, { useState, useEffect } from "react";
import axios from "axios";




//Richieste API alla lista di cose da fare "Todos"



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch =  async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(result)
      setData(result.data);
    };
    fetch(); 
  }, []);

  return (
    <div className="container">
      <h1>Lista di cose da fare</h1>
      <ul className="list-group">
        {data.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
