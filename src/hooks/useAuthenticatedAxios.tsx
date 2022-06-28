import { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { authenticatedAxios } from "../axios";
import useAuth from "./useAuth";

const useAuthenticatedAxios = () => {
  const auth = useAuth();

  useEffect(() => {
    const requestInterceptor = authenticatedAxios.interceptors.request.use(
      (config) => {
        if (config.headers && !config.headers?.Authorization) {
          config.headers.Authorization = `Bearer ${auth.user.tokens.access_token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      authenticatedAxios.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  return authenticatedAxios;
};

export default useAuthenticatedAxios;
