import {useState} from 'react';

//Custom hook para usar en formulario.
//Los values deben ser consistentes con los target.name
export const useForm = (initialState = {}) => {
     const [values, setValues] = useState(initialState);

     const reset = ()=>{
         setValues(initialState);
     }
     const handleInputChange =({target})=>{
        
        setValues({
            ...values,
            [target.name]:target.value
        });
    }

    return [ values, handleInputChange, reset];
}
