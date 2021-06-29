import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import {procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);
    
    const memoProcesoPesado= useMemo(()=>procesoPesado(counter), [counter]);
    return (
        <div>
            <h3>Memo hook Counter: <small>{counter}</small></h3>
            <hr></hr>

            <p>{memoProcesoPesado}</p>
            <button className="btn btn-primary"
                onClick={increment}>
                +1
            </button>
            <button className="btn btn-outline-primary ml-3"
                onClick={()=>{
                    setShow(!show);
                }}>
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
