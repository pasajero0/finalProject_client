import React from 'react';
import Layout from './Layout.js';

describe('Test for Layout component', ()=>{
    const props = {};
    
    it('Layout from render', ()=>{
        const wrapper = shallow(<Layout {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});