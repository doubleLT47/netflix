// Log In
export const loginStart = () => ({
    type: "LOGIN_START"
});

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const loginFailure = () => ({
    type: "LOGIN_FAILURE"
});

//Log Out

export const logout = () => ({
    type: "LOGOUT"
});

