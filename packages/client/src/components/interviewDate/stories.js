import { storiesOf } from '@storybook/react';
import React from 'react';
import InterviewDate from './interviewDate'

storiesOf('InterviewLocation', module)
    .add('dateViewer', () => (
        <InterviewDate
            date = {new Date()}
        />
    ));