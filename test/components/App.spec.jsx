import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App/App';

describe('App', () => {
    it('should render title', () => {
        const wrapper = shallow(<App message="Hello World!" />);
        expect(wrapper.find('div').text()).toEqual('Hello World!');
    });
});
