import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { storeCookie, deleteCookie } from "../../shared/Cookie";
import { auth } from "../../shared/firebase";

// 초기 값
const initialState = {
    user: null,
    is_login: false,
};

// const user_initial = {
//     user_name: "hee__0",
// };

// action types

const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// middleware actions
const signupFB = (id, pwd, username) => {
    return function (dispatch, getState, { history }) {
        auth.createUserWithEmailAndPassword(id, pwd)
            .then((user) => {
                console.log(user);
                auth.currentUser.updateProfile({ displayName: username });
            })
            .then(() => {
                dispatch(
                    setUser({
                        user_name: username,
                        id: id,
                        user_profile: "",
                    })
                );
                history.push("/");
            })
            .catch((error) => console.log(error))
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
};

const loginFB = (id, pwd) => {
    return function (dispatch, getState, { history }) {
        auth.signInWithEmailAndPassword(id, pwd)
            .then((user) => {
                console.log(user);
                dispatch(
                    setUser({
                        username: user.user.displayName,
                        id,
                        user_profile: "",
                    })
                );
                history.push("/");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    };
};

// reducers
export default handleActions(
    {
        [SET_USER]: (state, action) =>
            produce(state, (draft) => {
                storeCookie("is_login", "success");
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                deleteCookie("is_login");
                draft.user = null;
                draft.is_login = false;
            }),
        [GET_USER]: (state, action) => produce(state, (draft) => {}),
    },
    initialState
);

//action creator export
const actionCreators = {
    logOut,
    getUser,
    signupFB,
    loginFB,
};

export { actionCreators };
