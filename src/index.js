import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import { Router, Route, hashHistory } from 'react-router';

import App from './app';
import Comedies from './components/comedies';
import Dramas from './components/dramas';
import Horrors from './components/horrors';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/comedies' component={Comedies} />
                <Route path='/dramas' component={Dramas}/>
                    <Route path='/horrors' component={Horrors}/>
            </Route>
    </Router>,
    document.getElementById('root')
);
