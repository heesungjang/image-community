import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
    const { label, placeholder, handleChange, value } = props;
    return (
        <React.Fragment>
            <Grid>
                <Text margin="0px">{label}</Text>
                <ElInput
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
};

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;

export default Input;
