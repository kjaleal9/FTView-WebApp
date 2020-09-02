import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import ScreenGenerator from './components/layout/ScreenGenerator';

import './App.css';

function App() {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/screenGenerator' component={ScreenGenerator} />
                </Switch>
            </Fragment>
        </Router>
    );
}

export default App;
