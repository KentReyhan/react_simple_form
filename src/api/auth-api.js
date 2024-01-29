import { api } from "./config.js";

const postRegisterAuth = async ({ data }) => {
  const fetcher = await api();
  return fetcher.post(`/authaccount/registration`, data);
};

const postLoginAuth = async ({ data }) => {
    const fetcher = await api();
    return fetcher.post(`/authaccount/login`, data);
  };

export { postLoginAuth,postRegisterAuth };