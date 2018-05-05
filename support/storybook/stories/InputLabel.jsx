import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputLabel from '../../../src/components/InputLabel';

storiesOf('Input Label', module).add('with content', () => (
    <InputLabel content="This is a label" />
));
