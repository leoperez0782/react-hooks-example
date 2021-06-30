import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, [])
    useEffect(() => {
        //Para limpiar si se vuelve a llamar.
        setState({ data: null, loading: true, error: null });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                //Para evitar que llame al setState si el componente no esta montado.
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            }).catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                });
            });
    }, [url]);

    return state;
}
