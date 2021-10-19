import React from 'react';
import { Hero, Contribute, Billing, Invoice, NotFound } from './Pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MetaDecorator } from './Components'

function App() {
  return (
    <Router>
      <MetaDecorator description="Diwali Celebration in Amsterdam!" title="Diwali 2021 Amsterdam" imgUrl="/Diwali/sitaram2.jpeg" imgAlt="Diwali Celebration in Amsterdam!"/>
      <Switch>
        <Route path="/" exact component={Hero} />
        <Route path="/contribute" exact component={Contribute} />
        <Route path="/checkout" exact component={Billing} />
        <Route path="/thanks" exact component={Invoice} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
