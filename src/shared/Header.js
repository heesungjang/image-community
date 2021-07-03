import React from "react";
import { Grid, Text, Button } from "../elements";
// import { getCookie, deleteCookie } from "./Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { apiKey } from "./firebase";
import Permit from "./Permit";
import { history } from "../redux/configureStore";

const Header = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            {<Permit>
                <React.Fragment>
                    <Grid is_flex padding="4px 16px">
                        <Grid>
                            <Text margin="0px" size="24px" bold>
                                헬로
                            </Text>
                        </Grid>

                        <Grid is_flex>
                            <Button text="내정보"></Button>
                            <Button text="알림"></Button>
                            <Button
                                text="로그아웃"
                                handleSubmit={() => {
                                    dispatch(userActions.logoutFB());
                                }}
                            ></Button>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </Permit> ? (
                <Permit>
                    <React.Fragment>
                        <Grid is_flex padding="4px 16px">
                            <Grid>
                                <Text margin="0px" size="24px" bold>
                                    헬로
                                </Text>
                            </Grid>

                            <Grid is_flex>
                                <Button text="내정보"></Button>
                                <Button text="알림"></Button>
                                <Button
                                    text="로그아웃"
                                    handleSubmit={() => {
                                        dispatch(userActions.logoutFB());
                                    }}
                                ></Button>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                </Permit>
            ) : (
                <React.Fragment>
                    <Grid is_flex padding="4px 16px">
                        <Grid>
                            <Text margin="0px" size="24px" bold>
                                헬로
                            </Text>
                        </Grid>

                        <Grid is_flex>
                            <Button
                                text="로그인"
                                handleSubmit={() => {
                                    history.push("/login");
                                }}
                            ></Button>
                            <Button
                                text="회원가입"
                                handleSubmit={() => {
                                    history.push("/signup");
                                }}
                            ></Button>
                        </Grid>
                    </Grid>
                </React.Fragment>
            )}
        </>
    );
};

Header.defaultProps = {};

export default Header;
