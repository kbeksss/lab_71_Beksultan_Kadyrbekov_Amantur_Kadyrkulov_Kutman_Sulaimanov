import React, {Fragment} from 'react';
import {Route, Switch} from "react-router";
import Dishes from "./containers/Dishes/Dishes";
import Toolbar from "./components/Toolbar/Toolbar";
import Orders from "./containers/Orders/Orders";

const App = () => {
    return (
        <Fragment>
            <Toolbar/>
            <Switch>
                <Route path='/' exact component={Dishes}/>
                <Route path='/orders' component={Orders}/>
            </Switch>
        </Fragment>
    );
};

export default App;
