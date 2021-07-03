import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const { shape, src, size } = props;

    const styles = {
        src,
        size,
    };

    if (shape === "circle") {
        return <ImageCircle {...styles}></ImageCircle>;
    }
    if (shape === "rectangle") {
        return (
            <AspectOuter>
                <AspectInner {...styles}></AspectInner>
            </AspectOuter>
        );
    }
    return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
    shape: "circle",
    src: "https://www.proximus.be/dam/jcr:09204cf9-7c35-4c11-8a4e-7ae60128befd/cdn/sites/iportal/images/blogs/articles/res/instagram-influencers-blog-en~2020-06-11-08-24-57~cache.jpg",
    size: 36,
};

const AspectOuter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");

    background-size: cover;
    margin: 4px;
`;

export default Image;
