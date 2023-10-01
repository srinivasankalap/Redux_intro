import classes from './Counter.module.css';
import { counterActions } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=> state.counter.counter);
  const show=useSelector(state=> state.counter.toggleCounter);

  const incrementHandler=()=>{
    dispatch(counterActions.increment());
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
