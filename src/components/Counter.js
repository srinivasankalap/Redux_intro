import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=> state.counter);

  const incrementHandler=()=>{
    dispatch({type: 'incrementby2', amount: 2});
  }
  const decrementHandler=()=>{
    dispatch({type: 'decrementby2', amount: 2});
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment by 2</button>
        <button onClick={decrementHandler}>Decrement by 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
