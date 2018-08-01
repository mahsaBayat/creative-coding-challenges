import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MultiStepsChallenge from '../../../src/components/MultiStepsChallenge';

storiesOf('MultiStepsChallenge', module).add('with only the editors', () => (
    <MultiStepsChallenge
        scaffold="function setup() { createCanvas(640, 480); }"
        onNextStep={action('Go to next step')}
        onChange={action('Some Shit')}
    />
));
