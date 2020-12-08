import { useSelector } from "react-redux";

function App() {

  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="App">
      tá
    </div>
  );
}

export default App;
