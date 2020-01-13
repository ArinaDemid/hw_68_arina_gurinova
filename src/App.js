import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Counter from './containers/Counter/Counter';
import Tasks from './containers/Tasks/Tasks';

const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={Counter} />
        <Route path="/todo" component={Tasks} />
        <Route path="/counter" component={Counter} />
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Layout>
);

export default App;
