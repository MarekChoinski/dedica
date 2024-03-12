import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <br /> <br /> <br /> <br />
      <img src="./logo.png" alt="Logo" />
      <div>
        <h2>
          <br /> <br />
          <strong> Strona jest w budowie.</strong>
          <br /> <br />
          <br />
          Juz niedługo kupisz tu <strong>100% polską</strong> biżuterię
          najwyższej jakości srebra tworzoną pełnią naszego 🫀 <br />
          <br />
          <p>Póki co zapraszamy do składania zamówień na naszego Instagrama:</p>
        </h2>
        <br />
        <br />
        <ul>
          <li>
            <a href="">
              <img src="./instagram.webp" alt="Logo" className="instagram" />{" "}
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
