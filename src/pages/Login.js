import React, { useState } from "react";
import { Text, Input, Grid, Button } from "../elements";
// import { createCookie, getCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (username === "" || password === "") {
            window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
            return;
        }

        dispatch(userActions.loginFB(username, password));
    };
    const handleChange = (e) => {
        const {
            target: { name, value },
        } = e;

        if (name === "아이디") {
            setUsername(value);
        } else {
            setPassword(value);
        }
    };
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold>
                    로그인
                </Text>

                <Grid padding="16px 0px">
                    <Input
                        label="아이디"
                        handleChange={handleChange}
                        value={username}
                        username={username}
                        placeholder="아이디를 입력해주세요."
                        _onChange={(event) => {
                            console.log(event.target.value);
                        }}
                    />
                </Grid>

                <Grid padding="16px 0px">
                    <Input
                        type="password"
                        label="패스워드"
                        handleChange={handleChange}
                        value={password}
                        password={password}
                        placeholder="패스워드 입력해주세요."
                        _onChange={(event) => {
                            console.log(event);
                        }}
                    />
                </Grid>

                <Button text="로그인하기" handleSubmit={handleSubmit}></Button>
            </Grid>
        </React.Fragment>
    );
};

export default Login;
