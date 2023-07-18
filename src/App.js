import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState(" ");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>{advice}</h1>
    </div>
  );
};

export default App;
