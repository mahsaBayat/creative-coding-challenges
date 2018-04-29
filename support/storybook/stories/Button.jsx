import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../../../src/components/Button';

storiesOf('Button', module).add('with content', () => (
    <Button content="My Button" onClick={action('Hey the button works!')} />
));
