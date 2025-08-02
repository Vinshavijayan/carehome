"use client";
import axios from "axios";
import { baseUrl } from "@/api/const";

export const getAccessToken = () => {
  try {
    const ISSERVER = typeof window === "undefined";
    if (ISSERVER) return null;

    const token = localStorage.getItem("auth_token");
    return token || null;
  } catch (error) {
    return null;
  }
};


const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getAccessToken(),
  },
});

type postReqType = {
  url: string;
  data: any;
};

export const postRequest = async ({ url, data }: postReqType) => {
  try {
    const res = await api.post(url, data);
    return res.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || "Something went wrong";
    return {
      error: true,
      message,
    };
  }
};

export const getRequest = async (url: string) => {
  try {
    const res = await api.get(url);
    return res.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || "Something went wrong";
    return {
      error: true,
      message,
    };
  }
};



