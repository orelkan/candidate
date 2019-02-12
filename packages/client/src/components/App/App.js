import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';

import './App.css';
import LoginPage from '../Layout/Login';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        );
    }
}

export default App;
