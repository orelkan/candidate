import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SlideForm from './SliderForm';

storiesOf('SliderForm', module)
    .add('SliderForm', () => <SlideForm
        onClick={action('clicked')}>Hello Button</SlideForm>);
;