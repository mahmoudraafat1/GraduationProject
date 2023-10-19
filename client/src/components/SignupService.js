import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/api/users/signup";

export async function signup(name, email, password) {
  const response = await axios.post(API_ENDPOINT, {
    name,
    email,
    password,
  });

  return response.data;
}
