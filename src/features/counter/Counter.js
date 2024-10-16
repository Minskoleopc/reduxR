import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,reset } from './counterSlice';

const Counter = () =>{
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    <div>
        <h1>Counter:{count+1}</h1>
        <button onClick={()=>dispatch(increment())}>Incremnet</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>


}
export default Counter
