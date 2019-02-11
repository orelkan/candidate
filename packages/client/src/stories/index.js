import React from 'react';
import { storiesOf, configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import InterviewDayTable from '../components/InterviewDay/InterviewDayTable/InterviewDayTable';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';

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
storiesOf('InterviewDay', module).add('Table', () => {
    const data = [
        {
            firstName: 'Carin',
            lastName: 'Goldsworthy',
            ID: '360727597',
            gender: 'Female',
            interviewDate: new Date('2019-01-16T05:49:09Z'),
            phoneNumber: '4537830527',
        },
        {
            firstName: 'Caz',
            lastName: 'Chezelle',
            ID: '147461800',
            gender: 'Male',
            interviewDate: new Date('2019-01-16T05:49:09Z'),
            phoneNumber: '2364203697',
        },
        {
            firstName: 'Ellerey',
            lastName: 'Duncklee',
            ID: '624030537',
            gender: 'Male',
            interviewDate: new Date('2019-01-16T05:49:09Z'),
            phoneNumber: '7765657050',
        },
        {
            firstName: 'Margalit',
            lastName: 'Meir',
            ID: '139690402',
            gender: 'Female',
            interviewDate: new Date('2019-01-16T05:49:09Z'),
            phoneNumber: '2559630282',
        },
        {
            firstName: 'Yuri',
            lastName: 'Rodger',
            ID: '506415388',
            gender: 'Male',
            interviewDate: new Date('2019-01-16T05:49:09Z'),
            phoneNumber: '6568222823',
        },
    ];
    return <InterviewDayTable interviewsArray={data} />;
});
