import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demosTodos } from '../../fixtures/demosTodos';



describe('Pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demosTodos, {});
        expect(state).toEqual(demosTodos);

    });

    test('debe agregar un todo', () => {
        const newTodo =  {
            id: 3,
            desc: 'Aprender node',
            done: false
        };
        const state = todoReducer(demosTodos, {
            type: 'add',
            payload:newTodo
        });

        expect( state.length ).toBe(3);
        expect( state ).toEqual([...demosTodos,newTodo ]);
    });


    test('debe de borrar un todo', () => {
        //action.payload = id del todo
        
        const afterDelete = demosTodos.length -1;
        const state = todoReducer(demosTodos, {
            type: 'delete',
            payload: 2
        });
        
        expect( state.length ).toBe(afterDelete);
        expect( state ).toEqual([demosTodos[0]]);
    })

    test('debe de hacer el toggle del todo', () => {
        //action.payload = id del todo
        const state = todoReducer(demosTodos, {
            type:'toggle',
            payload:1
        });

        expect( state[0].done).toBe(true);
        expect( state[1]).toEqual( demosTodos[1]);
        
    })
    

})
