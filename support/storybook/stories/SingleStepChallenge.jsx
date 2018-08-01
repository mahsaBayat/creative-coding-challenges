import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SingleStepChallenge from '../../../src/components/SingleStepChallenge';

storiesOf('SingleStepChallenge', module).add('with input', () => (
    <SingleStepChallenge
        description="STEP ONE: FUCK YOU"
        template="function setup() { createCanvas(640, 480); }"
        onRun={action('The code is')}
        onChange={action('You are typing')}
        onNext={action('Template for the next step is')}
    />
));
