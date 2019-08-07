import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AutorBox from './Autor';
import Home from './Home';

ReactDOM.render(<Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute path="/" component={Home}/>
                        <Route path="/autor" component={AutorBox}/>
                        <Route path="/livro"/>
                    </Route>
                </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
