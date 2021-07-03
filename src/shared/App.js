import React from "react";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import { Grid } from "../elements";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../shared/Header";
import PostList from "../pages/PostList";

function App() {
    return (
        <React.Fragment>
            <Grid>
                <Header></Header>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/" exact component={PostList} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" exact component={Signup} />
                    </Switch>
                </ConnectedRouter>
            </Grid>
        </React.Fragment>
    );
}

export default App;
