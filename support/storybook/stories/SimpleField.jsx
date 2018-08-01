import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SimpleForm from '../../../src/components/SimpleForm';

storiesOf('SimpleForm', module).add('with content', () => (
    <SimpleForm submit={action('Welcome!!!!')} />
));
