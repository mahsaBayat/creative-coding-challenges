import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MultiStepsChallenge from '../../../src/components/MultiStepsChallenge';

const metaData = [
    {
        preText: 'Step 1',
        postText: 'Make the grid',
        imageSrc: '/../src/Assets/Images/Grid.png',
    },
    {
        preText: 'Step 2',
        postText: 'Now make the triangle',
        imageSrc: '/../src/Assets/Images/Triangle.png',
    },
];
storiesOf('MultiStepsChallenge', module).add('with only the editors', () => (
    <MultiStepsChallenge
        scaffold="function setup() { createCanvas(640, 480); }"
        numberOfSteps={2}
        onFinalSubmit={action('here is your shitty code')}
        metaData={metaData}
    />
));
