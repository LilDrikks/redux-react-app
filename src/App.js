import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchToken } from './redux_store/fetchLogin';
import { getUser } from './redux_store/getUser';
import { closeModal, openModal } from './redux_store/modal';
import { decrementar, incrementar } from './redux_store/slice';

function App() {

  const {modal, slice, token, user} = useSelector(state => state)
  
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      {modal && <h1>total: {slice}</h1>}
      <button onClick={() => dispatch(incrementar()) }>incrementar</button>
      <button onClick={() => dispatch(decrementar()) }>decrementar</button>
      <button onClick={() => dispatch(openModal()) }>abrir</button>
      <button onClick={() => dispatch(closeModal()) }>fechar</button>
      <button onClick={() => dispatch(fetchToken({ username: "dog", password: "dog" })) }>token</button>
      <button onClick={() => dispatch(getUser(token.data)) }>user</button>
      {user?.data && user.data.email}
    </div>
  );
}

export default App;
