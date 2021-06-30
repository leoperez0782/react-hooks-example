import React from 'react';
import { mount, shallow } from "enzyme";
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demosTodos } from '../../fixtures/demosTodos';
import { act } from '@testing-library/react';
describe('Pruebas en <TodoApp/>', () => {
    
    const wrapper = shallow( <TodoApp />);
    Storage.prototype.setItem = jest.fn(()=>{});

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de agregar un todo', () => {
        
        const completeApp = mount( <TodoApp /> );

        act(()=>{
            //acá ejecuto la función
            completeApp.find('TodoAdd').prop('handleAddTodo')(demosTodos[0]);
            completeApp.find('TodoAdd').prop('handleAddTodo')(demosTodos[1]);
        });

        expect( completeApp.find('h1').text().trim() ).toBe('TodoApp (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        
    });

    test('debe de eliminar un todo', () => {
        //Agrego un todoItem

        wrapper.find('TodoAdd').prop('handleAddTodo')( demosTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demosTodos[0].id );

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (0)');

    });
    
    
    
})
