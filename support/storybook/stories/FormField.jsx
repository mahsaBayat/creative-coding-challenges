import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FormField from '../../../src/components/FormField';

storiesOf('FormField', module).add('with content', () => (
    <FormField
        id="username"
        label="Username:"
        placeholder="e.g. jonnybravo"
        type="text"
        onChange={action('You typed something! YAY')}
    />
));
