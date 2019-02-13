import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InterviewTime from './InterviewTime';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';

storiesOf('InterviewTime', module)
    .add('Time', () => <InterviewTime
        title='שעה התחלה משוערת'
        time="05:00"
        icon={faHourglassStart}
        onClick={action('clicked')}>Hello Button</InterviewTime>)
    ;