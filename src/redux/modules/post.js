import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import { createAction, handleActions } from "redux-actions";
import "moment";
import moment from "moment";

import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
    list: [],
};

const initialPost = {
    // id: 0,
    // user_info: {
    //     user_name: "mean0",
    //     user_profile:
    //         "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    // },
    image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    contents: "",
    comment_cnt: 0,
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const addPostFB = (contents = "") => {
    return function (dispatch, getState, { history }) {
        const postDB = firestore.collection("post");
        const _user = getState().user.user;

        const user_info = {
            user_name: _user.user_name,
            user_id: _user.uid,
            user_profile: _user.user_profile,
        };
        const _post = {
            ...initialPost,
            contents: contents,
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        };

        const _image = getState().image.preview;

        const _upload = storage
            .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
            .putString(_image, "data_url");
        _upload.then((snapshot) => {
            snapshot.ref
                .getDownloadURL()
                .then((url) => {
                    console.log(url);

                    return url;
                })
                .then((url) => {
                    postDB
                        .add({ ...user_info, ..._post, image_url: url })
                        .then((doc) => {
                            let post = {
                                user_info,
                                ..._post,
                                id: doc.id,
                                image_url: url,
                            };
                            dispatch(addPost(post));
                            history.replace("/");

                            dispatch(imageActions.setPreview(null));
                        })
                        .catch((error) => {
                            window.alert("post 작성에 실패했어요!");
                            console.log("post 작성에 실패했어요!", error);
                        });
                })
                .catch((error) => {
                    window.alert("앗! 이미지 업로드에 문제가 있어요!");
                    console.log("앗! 이미지 업로드에 문제가 있어요!");
                });
        });
    };
};

const getPostFB = () => {
    return function (dispatch, getState, { history }) {
        const postDB = firestore.collection("post");

        postDB.get().then((docs) => {
            let post_list = [];
            docs.forEach((doc) => {
                let _post = doc.data();
                // 블로그 정리하자!!
                let post = Object.keys(_post).reduce(
                    (acc, cur) => {
                        if (cur.indexOf("user_") !== -1) {
                            return {
                                ...acc,
                                user_info: {
                                    ...acc.user_info,
                                    [cur]: _post[cur],
                                },
                            };
                        }
                        return { ...acc, [cur]: _post[cur] };
                    },
                    { id: doc.id, user_info: {} }
                );
                post_list.push(post);
            });

            dispatch(setPost(post_list));
        });
    };
};

export default handleActions(
    {
        [SET_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.list = action.payload.post_list;
            }),
        [ADD_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.list.unshift(action.payload.post);
            }),
    },
    initialState
);

const actionCreators = {
    setPost,
    addPost,
    getPostFB,
    addPostFB,
};

export { actionCreators };
