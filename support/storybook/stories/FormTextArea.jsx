import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FormTextArea from '../../../src/components/FormTextArea';

storiesOf('FormTextArea', module).add('with content', () => (
    <FormTextArea
        id="interests"
        rows="5"
        cols="50"
        placeholder="e.g. clubbing"
        label="Your interests:"
        type="text"
        onChange={action('You just typed in your interests.')}
    />
));
