import { Axios, AxiosInstance, AxiosResponse } from "axios";
import axios from "./axios";

export const sendContentsToApi = async (contents: string) => {
  const res = (await axios.post(`/summaries`, {
    content: contents,
  })) as AxiosResponse;
  return res.data;
};
