import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CandidateDetails from './CandidateDetails';

const data = {
    first_name: 'אוראל',
    last_name: 'הגבר',
    id: '312958364',
    street: 'הרצל',
    house_number: 2,
    city: 'אשדוד',
    medical_profile: 82,
    gender: 'male',
    birth_state: 'ישראל',
    birth_date: '1993-03-14',
    phone_number: '0548682632',
    israeli_citizenship: true,
    is_beavered_son: false,
    additional_citizenship: true,
};

const handleSubmit = action('Submitted:');
storiesOf('CandidateDetails', module)
    .add('data demo', () => <CandidateDetails details={data} onSubmit={handleSubmit} />)
    .add('no data', () => <CandidateDetails details={{}} onSubmit={handleSubmit}/>)
    .add('initial edit', () => <CandidateDetails details={{}} onSubmit={handleSubmit} initialEdit={true}/>);

