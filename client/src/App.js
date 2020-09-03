import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import ScreenGenerator from './components/layout/ScreenGenerator';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path='/' component={Landing} />

                    <Alert />
                    <Switch>
                        <Route
                            exact
                            path='/screenGenerator'
                            component={ScreenGenerator}
                        />
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
