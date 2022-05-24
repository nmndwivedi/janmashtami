import React from 'react';
import { Hero, Contribute, Billing, Invoice, NotFound } from './Pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MetaDecorator } from './Components'

function App() {
  return (
    <Router>
      <MetaDecorator description="Join us for a fantasic Diwali celebration in Amsterdam!" title="Diwali 2021 ISKCON Amsterdam" imgUrl="/Diwali/sitaram.jpeg" imgAlt="Diwali Celebration in Amsterdam!"/>
      <Switch>
        <Route path="/" exact component={Contribute} />
        <Route path="/contribute" exact component={Contribute} />
        <Route path="/checkout" exact component={Billing} />
        <Route path="/thanks" exact component={Invoice} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
