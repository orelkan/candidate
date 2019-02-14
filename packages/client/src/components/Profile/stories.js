import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CandidateProfile from './CandidateProfile';

storiesOf('CandidateProfile', module)
    .add('Profile', () => <CandidateProfile fullName="אסנת מילר"
     type='מלש"ב' 
     discription="בת 19 אוהבת לבשל ולאכול יודעת לשיר באמבטיה ויש לה 2 חתולות" 
     phoneNumber="0523164852" 
     email="Osnat@gmail.com"/>);
