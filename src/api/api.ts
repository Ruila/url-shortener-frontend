import { axiosInstance } from "./axiosInterceptors"
import { UserContentType } from "../types/UserContentType"
import { LoginResponse } from "../types/LoginResponse"
import { AxiosResponse } from "axios"
import { SignUpResponse } from "../types/SignUpResponse"

export const Apis = {
  login: (
    data: Omit<UserContentType, "accessToken">
  ): Promise<AxiosResponse<LoginResponse>> => {
    return axiosInstance.post("/login", {
      ...data,
    })
  },
  signUp: (
    data: Omit<UserContentType, "accessToken">
  ): Promise<AxiosResponse<SignUpResponse>> => {
    return axiosInstance.post("/user", {
      ...data,
    })
  },
}
