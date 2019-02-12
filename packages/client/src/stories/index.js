import React from 'react';
import { storiesOf, configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import NumberOfCandidates from '../components/NumberOfCandidates/NumberOfCandidates'
import TimeInterview from '../components/InterviewTime/InterviewTime'
import TimeAndNumber from '../components/NumberAndTimeInterview/NumberAndTimeInterview'
import { faHourglassStart, faHourglassEnd, faClock } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
      </span>
        </Button>
    ));
storiesOf('Number Of Candidates').add('number', () => <NumberOfCandidates numberOfCandidates={5} />);
storiesOf('InterviewTime').add('number', () => <TimeInterview time="04:00" icon={faHourglassStart} title="שעת התחלה משוערת" />);
storiesOf('Time and amount candidates').add('number of candiate and time', () => <TimeAndNumber />);
