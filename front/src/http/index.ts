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

export const createOrder = async (data: {
  name: string;
  phone: string;
  address: string;
  email: string;
  flowers: { flowerId: string; count: number }[];
}) => {
  return await $host.post(`/orders`, data);
};

export const getOrderDetails = async (id: string) => {
  return await $host.get(`/orders/${id}`);
};
