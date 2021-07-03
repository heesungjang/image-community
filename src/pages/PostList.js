// PostList.js
import Post from "../components/Post";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);

    useEffect(() => {
        dispatch(postActions.getPostFB());
    }, []);
    return (
        <React.Fragment>
            {/* <Post /> */}

            {post_list.map((p, idx) => {
                return <Post key={p.id} {...p} />;
            })}
        </React.Fragment>
    );
};

export default PostList;
