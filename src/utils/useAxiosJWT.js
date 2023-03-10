import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const useRefreshToken = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        "https://www.doc.gold.ac.uk/usr/391/token",
        {
          withCredentials: true,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${localStorage.accessToken}`,
          },
        }
      );
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
      navigate("/account");
      console.log(error);
    }
  };

  return [token, setToken, expire, setExpire, refreshToken];
};

export const useAxiosJWT = (token, setToken, setExpire, expire) => {
  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(
          "https://www.doc.gold.ac.uk/usr/391/token"
        );
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosJWT;
};
