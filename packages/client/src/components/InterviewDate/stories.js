import { storiesOf } from '@storybook/react';
import React from 'react';
import InterviewDate from './InterviewDate';

storiesOf('interviewDate', module).add('dateViewer', () => <InterviewDate date={new Date()} />);
