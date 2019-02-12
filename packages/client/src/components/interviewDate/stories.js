import { storiesOf } from '@storybook/react';
import React from 'react';
import InterviewDate from './interviewDate'

storiesOf('interviewLocation', module)
    .add('dateViewer', () => (
        <InterviewDate
            date = {new Date()}
        />
    ));