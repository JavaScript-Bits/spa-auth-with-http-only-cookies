import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const signIn = async (email: string, password: string) => {
  const { data, status } = await axios.post(`${API_BASE_URL}/login`, {
    email,
    password,
  });

  return { data, status };
};

export { signIn };
