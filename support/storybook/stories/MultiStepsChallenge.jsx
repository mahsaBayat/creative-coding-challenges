import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MultiStepsChallenge from '../../../src/components/MultiStepsChallenge';
import gridImage from '../../../src/Assets/Images/Grid.png';
import triangleImage from '../../../src/Assets/Images/Triangle.png';
import backgroundImage from '../../../src/Assets/Images/TriangleChallenge.jpg';
import ChallengeMetaData from '../../demo/SampleData.json';

const numberOfSteps = parseInt(ChallengeMetaData.data.numberOfSteps, 10);
const scaffold = ChallengeMetaData.data.initialTemplate;
const stepsMetaData = ChallengeMetaData.steps;
const challengeTitle = ChallengeMetaData.data.title;
const challengeDescription = ChallengeMetaData.data.generalDescription;
const metaData = [
    {
        preText: 'Step 1',
        postText: 'Make the grid',
        imageSrc: gridImage,
    },
    {
        preText: 'Step 2',
        postText: 'Now make the triangle',
        imageSrc: triangleImage,
    },
];

storiesOf('MultiStepsChallenge', module).add('The Triangle Challenge', () => (
    <MultiStepsChallenge
        scaffold={scaffold}
        numberOfSteps={numberOfSteps}
        onFinalSubmit={action('here is your shitty code')}
        metaData={metaData}
        title={challengeTitle}
        headerImageSrc={backgroundImage}
        description={challengeDescription}
    />
));
