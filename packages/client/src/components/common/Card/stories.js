import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Card from './Card';

const wraper = wrapped => {
    return <div style={{ margin: '10rem', direction: 'rtl' }}>{wrapped}</div>;
};

storiesOf('Common', module)
    .add('With male prop', () => wraper(<Card onCardButtonClick={action('clicked')} name="מיצי" gender="זכר" />))
    .add('With female prop', () => wraper(<Card onCardButtonClick={action('clicked')} name="מיצי" gender="נקבה" />));
