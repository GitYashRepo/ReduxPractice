import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './iceCreamSlice';

const IceCreamView = () => {
    const [value, setValue] = React.useState(1);
    const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of iceCream - {numOfIceCreams} </h2>
            <button onClick={() => dispatch(ordered())}>Order iceCream</button>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))}>Restock iceCream</button>
        </div>
    )
}

export default IceCreamView;
