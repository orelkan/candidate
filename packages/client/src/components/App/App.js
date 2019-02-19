import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';

import './App.css';
import LoginPage from '../Layout/Login';
import AddInterviewDay from '../Layout/AdminPanel/AddInterviewDay';

class App extends React.Component {
    render() {
        return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <Route path="/addInterviewDay" component={AddInterviewDay}/>
                <Route path="/" exact render={() => <p>Fuck you</p>}/>
            </Switch>
        </BrowserRouter>
        );
    }
}

export default App;
