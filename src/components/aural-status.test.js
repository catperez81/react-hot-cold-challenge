import React from 'react';
import {shallow, mount, render} from 'enzyme';
import AuralStatus from './aural-status';

it('Renders without crashing', () => {
    shallow(<AuralStatus />);
});
