import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const state = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>total: {state}</h1>
      <button onClick={() => dispatch({type:'INCREMENTAR'}) }>incrementar</button>
      <button onClick={() => dispatch({type:'DECREMENTAR'}) }>decrementar</button>
    </div>
  );
}

export default App;
