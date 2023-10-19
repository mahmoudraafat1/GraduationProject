import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/api/users/login";

export async function login(email, password) {
  const response = await axios.post(API_ENDPOINT, {
    email,
    password,
  });

  return response.data;
}
