import { ILoginForm } from "../models/interface";
import axiosInstance from "./axiosInstance";

export async function authLogin(data: ILoginForm) {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
}