import React, {memo} from 'react'

//memo memoriza el componente y solo lo vuelve a renderizar si las props cambian
export const Small = memo(({value}) => {
    console.log('Me volvi a llamar');
    return (
        <small>
            {value}
        </small>
    )
})
