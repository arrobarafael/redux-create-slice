import { useDispatch, useSelector } from "react-redux";
import {incrementar, reduzir} from "./store/contador";

function App() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div className="App">
      Valor: {state.total}
      <div>
        <button onClick = {() => dispatch(incrementar())}>Incrementar</button>
        <button onClick = {() => dispatch(reduzir())}>Reduzir</button>
      </div>
    </div>
  );
}

export default App;
