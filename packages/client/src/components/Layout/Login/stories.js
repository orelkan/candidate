import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginPage from './Login';

storiesOf("Layout", module).add("login page", () => <LoginPage />);