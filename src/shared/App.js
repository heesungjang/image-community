import "./App.css";
import React from "react";

import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Search from "../shared/Search";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";

import Permit from "./Permit";
import Header from "../components/Header";
import { Grid, Button } from "../elements";

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
    }, []);

    return (
        <React.Fragment>
            <Grid>
                <Header></Header>
                <ConnectedRouter history={history}>
                    <Route path="/" exact component={PostList} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/write" exact component={PostWrite} />
                    <Route path="/post/:id" exact component={PostDetail} />
                    <Route path="/search" exact component={Search} />
                </ConnectedRouter>
            </Grid>
            <Permit>
                <Button
                    is_float
                    text="+"
                    _onClick={() => {
                        history.push("/write");
                    }}
                ></Button>
            </Permit>
        </React.Fragment>
    );
}

export default App;
