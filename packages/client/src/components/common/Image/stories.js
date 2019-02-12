import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './Image';

storiesOf('Image', module)
    .add('slow loading image', () => (
        <Image src="https://www.nasa.gov/centers/stennis/images/content/702983main_SSC-2012-01568.jpg" />
    ))
    .add('with spinnerSize', () => (
        <Image
            src="https://www.nasa.gov/centers/stennis/images/content/702983main_SSC-2012-01568.jpg"
            spinnerSize="100px"
        />
    ))
    .add('with a non existing image', () => <Image src="something" />);
