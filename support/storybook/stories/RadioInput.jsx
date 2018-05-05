import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioInput from '../../../src/components/RadioInput';

storiesOf('RadioInput', module).add('with content', () => (
    <div>
        <RadioInput
            type="radio"
            value="Male"
            name="gender"
            label="Your gender:"
            onChange={action('You chose')}
        />
        <RadioInput
            type="radio"
            value="Female"
            name="gender"
            onChange={action('You chose')}
        />
        <RadioInput
            type="radio"
            value="Other"
            name="gender"
            onChange={action('You chose')}
        />
    </div>
));
