import { storiesOf } from '@storybook/react';
import React from 'react';
import InterviewDayTable from './InterviewDayTable';

const data = [
    {
        firstName: 'מוחמד',
        lastName: 'החמדן',
        ID: '360727597',
        gender: 'נקבה',
        interviewDate: new Date('2019-01-16T05:49:09Z'),
        phoneNumber: '4537830527',
    },
    {
        firstName: '30',
        lastName: '60',
        ID: '147461800',
        gender: 'נקבה',
        interviewDate: new Date('2019-01-16T05:49:09Z'),
        phoneNumber: '2364203697',
    },
    {
        firstName: 'בר',
        lastName: 'יעקב',
        ID: '624030537',
        gender: 'זכר',
        interviewDate: new Date('2019-01-16T05:49:09Z'),
        phoneNumber: '7765657050',
    },
    {
        firstName: 'שחר',
        lastName: 'עמיר',
        ID: '139690402',
        gender: 'נקבה',
        interviewDate: new Date('2019-01-16T05:49:09Z'),
        phoneNumber: '2559630282',
    },
    {
        firstName: 'אבי',
        lastName: 'ביטר',
        ID: '506415388',
        gender: 'זכר',
        interviewDate: new Date('2019-01-16T05:49:09Z'),
        phoneNumber: '6568222823',
    },
];
storiesOf('InterviewDay', module).add('Table', () => {
    return <InterviewDayTable interviewsArray={data} />;
});
