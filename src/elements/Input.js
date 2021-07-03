import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
    const { label, placeholder, handleChange, value, type } = props;
    return (
        <React.Fragment>
            <Grid>
                <Text margin="0px">{label}</Text>
                <ElInput
                    type={type}
                    name={label}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </Grid>
        </React.Fragment>
    );
};

Input.defaultProps = {
    label: "텍스트",
    placeholder: "텍스트를 입력해주세요.",
    handleChange: () => {},
    value: "",
    type: "text",
};

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;

export default Input;
