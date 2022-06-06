import React from 'react';
import { Hero, Contribute, Billing, Invoice, NotFound } from './Pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MetaDecorator } from './Components'

function App() {
  return (
    <Router>
      <MetaDecorator description="Join us for a fantasic Janmashtami celebration in Amsterdam!" title="Janmashtami 2022 ISKCON Amsterdam" imgUrl="/Diwali/jm.jpeg" imgAlt="Janmashtami Celebration in Amsterdam!"/>
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
