import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementar, incrementar } from './redux_store/slice';

function App() {

  const state = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>total: { state }</h1>
      <button onClick={() => dispatch(incrementar()) }>incrementar</button>
      <button onClick={() => dispatch(decrementar()) }>decrementar</button>
    </div>
  );
}

export default App;
