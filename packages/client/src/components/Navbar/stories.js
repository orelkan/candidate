import React from 'react';
import { storiesOf } from '@storybook/react';

import Navbar from './Navbar';

storiesOf("Navbar", module).add("Navbar", () => <Navbar first_name={"שחר"} last_name={"עמיר"} job={"8197/טכנולוגיות"}/>);