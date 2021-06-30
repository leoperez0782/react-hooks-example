import React from 'react';
import { shallow} from "enzyme";

import { HookApp } from '../../HookApp';

describe('Probando <HookApp />', ()=>{

    test('Debe renderizar correctamente', ()=>{
        const wrapper = shallow(<HookApp />);

        expect( wrapper ).toMatchSnapshot();
    })
})