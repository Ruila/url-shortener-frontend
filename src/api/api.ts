import { axiosInstance } from "./axiosInterceptors"
import { UserContentType } from "../types/UserContentType"
import { LoginResponse } from "../types/LoginResponse"
import { AxiosResponse } from "axios"
import { SignUpResponse } from "../types/SignUpResponse"
import { GetUrlsResponse } from "../types/GetUrlsResponse"
import { GenerateShortenUrlResponse } from "../types/GenerateShortenUrlResponse"
import { GenerateShortenUrlRequest } from "../types/GenerateShortenUrlRequest"
import { DeleteShortenUrlRequest } from "../types/DeleteShortenUrlRequest"
import { DeleteShortenUrlResponse } from "../types/DeleteShortenUrlResponse"

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
  getAllUrls: (userId: number): Promise<AxiosResponse<GetUrlsResponse>> => {
    return axiosInstance.post("/urls", {
      userId,
    })
  },
  generateShortenUrl: (
    data: GenerateShortenUrlRequest
  ): Promise<AxiosResponse<GenerateShortenUrlResponse>> => {
    return axiosInstance.post("/url", {
      ...data,
    })
  },
  deleteUrl: (
    data: DeleteShortenUrlRequest
  ): Promise<AxiosResponse<DeleteShortenUrlResponse>> => {
    return axiosInstance.delete(`/url/${data.urlId}`)
  },
}
