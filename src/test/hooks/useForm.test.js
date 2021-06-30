import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Preubas en useForm', ()=>{
    const initialForm = {
        name: 'Leonardo',
        email: 'leonardo@gmail.com'
    };

    test('debe de regresar el formulario por defecto',()=>{

        const { result } = renderHook(()=> useForm(initialForm));
        
        const [values, handleInputChange, reset] = result.current;
        expect( values ).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    });

    test('debe de cambiar el name del formulario', ()=>{
        const { result } = renderHook(()=> useForm(initialForm));
        

        const [ , handleInputChange ]  = result.current;
        
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value: 'Nelson'
                },
            });
        });

        const [ values ]   = result.current;
        expect( values ).toEqual({...initialForm, name: 'Nelson'});
    });
    test('debe de reestablecer el formulario con reset', ()=>{
        const { result } = renderHook(()=> useForm(initialForm));
        

        const [ , handleInputChange, reset ]  = result.current;
        
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value: 'Nelson'
                },
            });
            reset();
        });

        const [ values ]   = result.current;
        expect( values ).toEqual(initialForm);
    });
})