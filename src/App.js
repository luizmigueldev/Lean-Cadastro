import React, { Fragment } from 'react';
import GlobalStyle from './globalStyles';
import SignUp from './pages/SignUp';
import List from './pages/List';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={SignUp} />
          <Route path="/List" component={List} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
