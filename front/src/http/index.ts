import axios from "axios";
import { ESortBy } from "../enums";

const $host = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getShops = () => {
  return $host.get("/shops");
};

export const getFlowers = async (shopId: string, sortBy?: ESortBy) => {
  const params = {};
  sortBy && Object.assign(params, { sortBy });

  return await $host.get(`/shops/${shopId}/flowers`, { params });
};
