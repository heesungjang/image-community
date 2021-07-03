import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image src={props.src} shape="circle" />
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src} />
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

Post.defaultProps = {
    user_info: {
        user_name: "mean0",
        user_profile:
            "https://www.proximus.be/dam/jcr:09204cf9-7c35-4c11-8a4e-7ae60128befd/cdn/sites/iportal/images/blogs/articles/res/instagram-influencers-blog-en~2020-06-11-08-24-57~cache.jpg",
    },
    image_url:
        "https://www.proximus.be/dam/jcr:09204cf9-7c35-4c11-8a4e-7ae60128befd/cdn/sites/iportal/images/blogs/articles/res/instagram-influencers-blog-en~2020-06-11-08-24-57~cache.jpg",
    contents: "인플러언서!!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00",
};

export default Post;
