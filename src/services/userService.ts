import axios from "axios";

export const getUsers = () => {
  return axios.get("https://fakestoreapi.com/users");
};

export const getSingleUser = (userId: string) => {
  return axios.get(`https://fakestoreapi.com/users/${userId}`);
};
