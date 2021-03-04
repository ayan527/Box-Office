import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Title from './components/Title';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Title title="BOX OFFICE" subtitle="Wanna check Actor or Film?" />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/starred" exact>
          <Starred />
        </Route>

        <Route>Page not found !!</Route>
      </Switch>
    </div>
  );
}

export default App;
