import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { text, handleSubmit } = props;

    return (
        <React.Fragment>
            <ElButton onClick={handleSubmit}>{text}</ElButton>
        </React.Fragment>
    );
};

Button.defaultProps = {
    text: "텍스트",
    handleSubmit: () => {},
};

const ElButton = styled.button`
    width: 100%;
    background-color: #212121;
    color: #ffffff;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
`;

export default Button;
