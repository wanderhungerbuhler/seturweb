import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Eventos from './pages/Eventos';
import Cadastur from './pages/Cadastur';
import Relatorio from './pages/Relatorio';
import Gabinete from './pages/Gabinete';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/eventos" component={Eventos} />
      <Route path="/gabinete" component={Gabinete} />
      <Route path="/cadastur" component={Cadastur} />
      <Route path="/relatorio" component={Relatorio} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
