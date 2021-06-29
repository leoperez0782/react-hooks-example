import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //Si la data no es null la asigno.
    const {author, quote} = !!data && data[0];
    console.log(author, quote);
    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr></hr>
            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-2"> {quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            <button className="btn btn-primary"
                    onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}
