import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {increment} from "../../store/slices/test";

const Test = () => {
    const count = useSelector((state) => state.test.count);
    const dispatch = useDispatch();

    const incrementCount = () => dispatch(increment())

    return (
        <div>
            <div>{count}</div>
            <button onClick={incrementCount}>Click</button>
        </div>
    )
}

export default Test;
