import React from 'react';
import { storiesOf, configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import InterviewLocation from '../components/interviewLocation/interviewLocation'
import InterviewDate from '../components/interviewDate/interviewDate'
import 'bootstrap/dist/css/bootstrap.min.css';

const req = require.context('../components', true, /stories\.js/);
configure(() => {
    req.keys().forEach(filename => req(filename));
}, module);

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

storiesOf('InterviewLocation', module)
    .add('location', () =>(
        <InterviewLocation
            location={"גלילות"}
            imgSrc={"https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png"} //temp img
        />
        ))
    .add('dateViewer', () => (
        <InterviewDate
            date = {new Date()}
        />
    ));
