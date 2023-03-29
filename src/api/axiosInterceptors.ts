import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import HttpStatus from "http-status-codes"

function setToken(config: AxiosRequestConfig): void {
  const token = localStorage.getItem("jwt-token")
  if (token && config.headers && !config.headers.Authorization) {
    config.headers["Authorization"] = `Bearer ${token}`
  }
}

export function setInterceptors(service: AxiosInstance): void {
  service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      process.env.NODE_ENV !== "test" && setToken(config)
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    response => {
      return response
    },
    error => {
      // for local test
      if (process.env.NODE_ENV === "test") {
        return Promise.reject(error)
      }

      if (error.response && error.response.status === HttpStatus.UNAUTHORIZED) {
        window.location.href = window.location.origin + "/login"
        localStorage.setItem("jwt-token", "")
      }

      return Promise.reject(error)
    }
  )
}

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
})

setInterceptors(axiosInstance)
