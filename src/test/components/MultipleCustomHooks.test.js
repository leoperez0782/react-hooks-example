import { shallow } from 'enzyme'
import React from 'react'
import {MultipleCustomHooks} from '../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';


jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', ()=>{

    beforeEach(()=>{
        useCounter.mockReturnValue({
            counter:1,
            increment: () => { }
        });
    });

    test('debe de mostrarse correctamente', ()=>{

       
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
         const wrapper = shallow( <MultipleCustomHooks />);
         expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar la informacion', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Leonardo',
                quote: 'Mas se perdio en la guerra'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks />);

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('p').text().trim() ).toBe('Mas se perdio en la guerra');
        expect( wrapper.find('footer').text().trim() ).toBe('Leonardo');
        console.log(wrapper.html());
    })
    
})
