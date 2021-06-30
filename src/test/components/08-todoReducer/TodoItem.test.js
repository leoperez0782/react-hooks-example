import { shallow } from "enzyme";
import { TodoItem } from '../../../components/08-useReducer/TodoItem'
import { demosTodos } from '../../fixtures/demosTodos';


describe('Pruebas en <TodoLItem/>', ()=>{

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<TodoItem 
    todo ={demosTodos[0]}
    index = {0}
    handleDelete ={handleDelete}
    handleToggle = {handleToggle} />);

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe llamar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith(demosTodos[0].id);
    })
    test('debe llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith(demosTodos[0].id);
    })
    
    test('debe de mostrar el texto correctamente', () => {
        const todo = demosTodos[0];
        const text =`${1}.${todo.desc}`;

        expect( wrapper.find('p').text()).toEqual(text);
    })

    test('debe de tener la clase complete si el todo.done esta en true', () => {
        const todo = demosTodos[0];
        todo.done = true;
        const wrapper = shallow(<TodoItem 
            todo ={todo}
            index = {0}
            handleDelete ={handleDelete}
            handleToggle = {handleToggle} />);
        expect( wrapper.find('p').hasClass('complete')).toBe(true);
    })
    
    
    
});
