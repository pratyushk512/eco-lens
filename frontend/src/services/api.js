import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const signup = ({
  fullName,
  username,
  email,
  password,
}) =>
  api.post("/users/register", {
    fullName,
    username,
    email,
    password,
  });

export const login = ({
    email,
    password
})=>api.post("users/login",{
    email,
    password
})