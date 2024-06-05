import { useState } from "react";
import "./App.css";
import Board from "./Board";

const cardItems = [
  { id: "1", title: "title 1" },
  { id: "2", title: "title 2" },
  { id: "3", title: "title 3" },
  { id: "4", title: "title 4" },
  { id: "5", title: "title 5" },
];

function App() {
  const [cards, setCards] = useState(cardItems);

  return (
    <div>
      <Board></Board>
    </div>
  );
}

export default App;
