import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';

import './App.css';
import LoginPage from '../Layout/Login';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/" exact render={() =><p>Aba sheli be geves</p>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
