import React from 'react';
import EquipmentRequest  from './components/pages/EquipmentRequest'
import EditManufacturer  from './components/pages/EditManufacturer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Theme } from './tokens'

import Nav from './components/patterns/Nav'
import './styles/reset.css';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav
          navItems={[
            {
              to: '/',
              label: 'Equipment Request',
              theme: Theme.alpha
            },
            {
              to: '/other',
              label: 'Edit Manufacturer',
              theme: Theme.epsilon
            }
          ]}
        />
        <Switch>
          <Route path="/" exact>
            <EquipmentRequest />
          </Route>
          <Route path="/other" exact>
            <EditManufacturer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
