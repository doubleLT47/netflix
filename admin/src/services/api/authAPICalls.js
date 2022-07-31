import request from "services/axiosClient/request";
import apiPath from "services/service.config";

export const login = async (user) => {
  const res = await request("POST", apiPath.login, { user });
  if (res.data.isAdmin) {
    return {
      user: res.data.user,
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
    };
  } else {
    return { error: "Tài khoản không chính xác!" };
  }
};
