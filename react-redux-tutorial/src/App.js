import './App.css';
import { increment, decrement, isLogged }from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {

const counter = useSelector((state) => state.counter);
const logged = useSelector((state) => state.login);

const dispatch = useDispatch();

let sign_in_status = '';
if(logged === false) {
  sign_in_status = "SIGN_IN";
} else {
  sign_in_status = "SIGN_OUT";
}

  return (
    <div className="App">
        <h1>React Redux Tutorial</h1>
        <p>Counter : {counter}</p>

        <button onClick={() => dispatch(increment())}>INCREMEENT</button>
        <button onClick={() => dispatch(decrement())}>DECREMEENT</button>
        <button onClick={() => dispatch(isLogged())}>{sign_in_status}</button>

        {logged ? <p> Login</p> : <p>Logout</p>}
    </div>
  );
}

export default App;
