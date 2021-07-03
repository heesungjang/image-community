export const createCookie = (username, password) => {
    const date = new Date();
    const dateString = date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 3);
    const usernameCookieString = `user=${username};` + dateString;
    const passwordCookieString = `Password=${password};` + dateString;
    storeCookie(usernameCookieString, passwordCookieString);
};

export const storeCookie = (name, value, exp = 5) => {
    let date = new Date();
    // 날짜를 만들어줍니다.
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    // 저장!
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

export const deleteCookie = (user) => {
    let date = new Date("2020-01-01").toUTCString();
    document.cookie = "Password=; expires=" + date;
    document.cookie = user + "=; expires=" + date;
};

export const getCookie = (username) => {
    const value = document.cookie;
    const parts = value.split(`; ${username}`);
    if (parts.length) {
        return parts.pop().split(";").shift().split("=")[1];
    }
};
