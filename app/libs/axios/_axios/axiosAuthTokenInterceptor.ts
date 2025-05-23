import { AxiosError, type InternalAxiosRequestConfig } from "axios"

const tokenInterceptor = {
  onFulfilled(config: InternalAxiosRequestConfig) {
    const accessToken = localStorage.getItem("accessToken")
    if (config.headers && !!accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  onRejected(error: AxiosError) {
    return Promise.reject(error)
  },
}

export default tokenInterceptor
