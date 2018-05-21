import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IFrame from '../../../src/components/IFrame';

storiesOf('IFrame', module).add('with code', () => (
    <IFrame
        sourceCode="function setup() {
            createCanvas(640, 480);
          }
          
          function draw() {
            if (mouseIsPressed) {
              fill(0);
            } else {
              fill(255);
            }
            ellipse(mouseX, mouseY, 80, 80);
          }"
        sandbox="allow-scripts"
        title="Output"
        width="500"
        height="300"
    />
));
