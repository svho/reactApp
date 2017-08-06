import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Articles from './Articles';
import Article from './Article';
import Home from './Home';
import NoMatch from './NoMatch';
import registerServiceWorker from './registerServiceWorker';
import {  } from 'react-router';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router>
      <Route path='/' component={App}>
        <Route exact path='/' component={Home}/>
        <Route path='articles' component={Articles}>
          <Route path='/article/:id' component={Article}/>
        </Route>
        <Route path='*' component={NoMatch}></Route>
      </Route>
    </Router>
    ,document.getElementById('root')
  );


registerServiceWorker();
