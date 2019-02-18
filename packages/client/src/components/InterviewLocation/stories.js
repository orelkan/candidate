import React from 'react';
import { storiesOf } from '@storybook/react';
import InterviewLocation from './InterviewLocation';

storiesOf('InterviewLocation', module).add('location', () => (
    <InterviewLocation
        location={'גלילות'}
        imgSrc={'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png'} //temp img
    />
));
