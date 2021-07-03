import React, { useState } from "react";
import { Grid, Text, Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdCheck, setPwdCheck] = useState("");
    const [username, setUsername] = useState("");

    const handleChange = (e) => {
        const {
            target: { name: type, value },
        } = e;
        if (type === "아이디") {
            setId(value);
        } else if (type === "닉네임") {
            setUsername(value);
        } else if (type === "비밀번호") {
            setPwd(value);
        } else {
            setPwdCheck(value);
        }
    };

    const signup = (props) => {
        if (id === "" || pwd === "" || username === "") {
            return;
        }
        if (pwd !== pwdCheck) {
            return;
        }

        dispatch(userActions.signupFB(id, pwd, username));
    };
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold>
                    회원가입
                </Text>

                <Grid padding="16px 0px">
                    <Input
                        label="아이디"
                        placeholder="아이디를 입력해주세요."
                        value={id}
                        handleChange={handleChange}
                    />
                </Grid>

                <Grid padding="16px 0px">
                    <Input
                        label="닉네임"
                        placeholder="닉네임을 입력해주세요."
                        handleChange={handleChange}
                        value={username}
                    />
                </Grid>

                <Grid padding="16px 0px">
                    <Input
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요."
                        handleChange={handleChange}
                        value={pwd}
                    />
                </Grid>

                <Grid padding="16px 0px">
                    <Input
                        label="비밀번호 확인"
                        placeholder="비밀번호를 다시 입력해주세요."
                        handleChange={handleChange}
                        value={pwdCheck}
                    />
                </Grid>

                <Button text="회원가입하기" handleSubmit={signup}></Button>
            </Grid>
        </React.Fragment>
    );
};

Signup.defaultProps = {};

export default Signup;
