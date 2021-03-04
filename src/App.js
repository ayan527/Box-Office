import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        This is Home Page
      </Route>

      <Route path="/starred" exact>
        This is Starred Page
      </Route>

      <Route>Page not found !!</Route>
    </Switch>
  );
}

export default App;
