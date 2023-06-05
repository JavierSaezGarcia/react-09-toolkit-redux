import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import reactLogo from './assets/react.svg';
import './App.css';
import { increment, decrement, incrementBy } from './store/slices/counter';


function App() {

  // Para seleccionar algo del store: useSelector()
  const { counter } = useSelector (state => state.counter);

  const dispatch = useDispatch();
  
  return (
    <>
      <div>
       <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count my money: {counter} $</h1>
      <div className="card">
        <button onClick={ () => dispatch(increment())}>
          Increment
        </button>
        <button onClick={ () => dispatch(decrement())}>
          Decrement
        </button>       
        <button onClick={ () => dispatch(incrementBy(2))}>
          Increment by 
        </button>       
      </div>
     
    </>
  )
}

export default App
