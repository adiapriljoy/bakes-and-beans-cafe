import { IUserForm } from "../models/interface";
import axiosInstance from "./axiosInstance";

export async function fetchUser() {
  const response = await axiosInstance.get("/users");
  return response.data;
}

export async function createUser(user: IUserForm) {
  const response = await axiosInstance.post("/users", user);
  return response.data;
}
