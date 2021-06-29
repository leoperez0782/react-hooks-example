import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';
//cALLBACK HOOK SIRVE PARA CUANDO HAY QUE MANDAR UNA FUNCION A UN COMPONENTE HIJO
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    //const increment =()=> setCounter(counter + 1);

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num);
        },
        [setCounter],
    )

    useEffect(()=>{
        //Segundo uso del useCallback, para que no se dispare siempre el useEffect
    }, [increment])
    return (
        <div>
            <h1>UseCAllbackHook</h1>
            <hr/>
            <p>{JSON.stringify(counter)}</p>
            {/**el componente esta memorizado */}
            <ShowIncrement increment={increment} />

        </div>
    )
}
