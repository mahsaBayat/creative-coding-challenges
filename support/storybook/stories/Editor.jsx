import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Editor from '../../../src/components/Editor';

storiesOf('Editor', module).add('controlled', () => (
    <Editor template="console.log('OMG')" onRun={action('The code is: ')} />
));
