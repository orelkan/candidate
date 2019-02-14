import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';

import './App.css';

class App extends React.Component {
    render() {
        return <BrowserRouter>{/* configure routes here */}</BrowserRouter>;
    }
}

export default App;
