import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../../../src/components/App/App';

storiesOf('App', module).add('with message', () => (
    <App message="Hello World!" />
));
