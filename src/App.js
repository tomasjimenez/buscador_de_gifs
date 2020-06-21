import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";
import "./App.css";

const App = () => {
  const [text, setText] = useState();
  const [gifs, setGifs] = useState([]);
  const endPoint = 'https://api.giphy.com/v1/gifs/search?' ;
  const API_KEY = '';

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Ciclo de vida de un componente

  useEffect(() => {
    console.log("Mi componente se montó");
  }, []);

  useEffect(() => {
    console.log("El valor de text cambio");
    axios.get(`${endPoint}api_key=${API_KEY}&q=${text}&limit=5`)
      .then((info) => setGifs(info.data.data))
      .catch(() => alert("Ocurrio un error"))
  }, [text]);

  return (
    <section>
      <h1 className="text-center">GIFS</h1>
      <div className="container">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Busca un gif
            </span>
          </div>
          <input type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="row">
          {gifs.map((gif) => <Card key={gif.id} img={gif.images.downsized_large.url} title={gif.title} url="Url" /> )}
          
        </div>
      </div>
    </section>
  );
};

export default App;
