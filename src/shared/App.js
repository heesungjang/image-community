import React from "react";
import { history } from "../redux/configureStore";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { Grid } from "../elements";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../shared/Header";
import PostList from "../pages/PostList";

import { apiKey } from "./firebase";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {
    const dispatch = useDispatch();
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key) ? true : false;
    React.useEffect(() => {
        if (is_session) {
            dispatch(userActions.loginCheckFB());
        }
    });
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
