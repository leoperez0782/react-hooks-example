import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('componente montado');
        // window.addEventListener('mousemove', (e)=>{
        //     //esto asi sin remover se termina comiendo la memoria
        //     const coords ={x: e.x, y: e.y};
        //     console.log(coords)
        // })
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            console.log(coords);
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log('componente desmontado');
            //aca se limpian los listeners u otras subscripciones
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    return (
        <div>
            <h3>Eres Genial!</h3>
        </div>
    )
}
