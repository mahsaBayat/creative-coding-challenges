import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Editor from '../../../src/components/Editor';

storiesOf('Editor', module).add('controlled', () => (
    <Editor
        template="<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js'></script>"
        onRun={action('Good Job')}
    />
));
