import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RegistrationForm from '../../../src/components/RegistrationForm';

storiesOf('RegistrationForm', module).add('with content', () => (
    <RegistrationForm submit={action('Thanks for joining us<3')} />
));
