import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { HashRouter, Route } from 'react-router-dom';
import { IconfontStyle } from './statics/iconfont/iconfont';
import store from './store';
import SignIn from './login/signin';
import SignUp from './login/signup';
import Home from './home';
import PersonalPage from './personalpage';
import Write from './write';
import Read from './read';
import Answer from './answer';
import PutQuestion from './putquestion';

function App() {  
  return ( 
    <Provider store = {store}>
    <GlobalStyle />
    <IconfontStyle />
    <HashRouter>
    	<Route exact path='/' component={ SignIn } />
        <Route exact path='/signup' component={ SignUp } />
        <Route exact path='/home' component={ Home } />
        <Route exact path='/personalpage' component={ PersonalPage } />
        <Route exact path='/answer' component={ Answer } />
        <Route exact path='/putquestion' component={ PutQuestion } />
    </HashRouter>
    </Provider>
  );
}

export default App;