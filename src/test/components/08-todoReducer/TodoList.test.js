import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demosTodos } from '../../fixtures/demosTodos';



describe('Pruebas en <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
        todos={demosTodos}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
        />
    );
    
    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener 2 <TodoItem/>', () => {
        
        expect( wrapper.find('TodoItem').length ).toBe( demosTodos.length );
        expect( wrapper.find('TodoItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function));

    })
    
});
