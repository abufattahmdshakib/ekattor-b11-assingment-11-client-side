import axios from "axios";
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://uddog-server.vercel.app/",
});

const useAxiosSecure = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const isInterceptorAttached = useRef(false);

  useEffect(() => {
    if (!loading && user?.accessToken && !isInterceptorAttached.current) {
      // Request Interceptor
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
          return config;
        },
        (error) => Promise.reject(error)
      );

      // Response Interceptor
      const responseInterceptor = axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
          if (
            error?.response?.status === 401 ||
            error?.response?.status === 403
          ) {
            logOut()
              .then(() => console.log("Logged out due to auth failure"))
              .catch(console.error);
          }
          return Promise.reject(error);
        }
      );

      isInterceptorAttached.current = true;

      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
        isInterceptorAttached.current = false;
      };
    }
  }, [user?.accessToken, loading, logOut]);

  return axiosInstance;
};

export default useAxiosSecure;
