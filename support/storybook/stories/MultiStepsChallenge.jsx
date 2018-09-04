import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MultiStepsChallenge from '../../../src/components/MultiStepsChallenge';
import gridImage from '../../../src/Assets/Images/Grid.png';
import flippedTriangleImage from '../../../src/Assets/Images/FlippedTriangle.png';
import backgroundImage from '../../../src/Assets/Images/TriangleChallenge.jpg';
import ChallengeMetaData from '../../demo/SampleData.json';

const numberOfSteps = parseInt(ChallengeMetaData.metaData.numberOfSteps, 10);
const scaffold = ChallengeMetaData.metaData.initialTemplate;
const stepsMetaData = ChallengeMetaData.stepData;
const challengeTitle = ChallengeMetaData.metaData.title;
const challengeDescription = ChallengeMetaData.metaData.generalDescription;
// I use the following as the metaData because of the image importing issue from JSON.
// You can simply replace the trinagleMetaData with stepsMetaData and read the data from there
// but you have the images anymore.
const triangleMetaData = [
    {
        preText:
            'First let’s make a grid of ellipses. We know how to easily do this with two for loops.',
        postText:
            'In this example, the grid gets lighter at it goes down.Can you change it to be lighter as it goes across?',
        imageSrc: gridImage,
    },
    {
        preText: 'Now let’s turn our grid into a triangle.',
        postText: 'Can you flip the triangle to make it look like this?',
        imageSrc: flippedTriangleImage,
    },
];

storiesOf('MultiStepsChallenge', module).add('The Triangle Challenge', () => (
    <MultiStepsChallenge
        scaffold={scaffold}
        numberOfSteps={numberOfSteps}
        onFinalSubmit={action('here is your shitty code')}
        metaData={triangleMetaData}
        title={challengeTitle}
        headerImageSrc={flippedTriangleImage}
        description={challengeDescription}
    />
));
