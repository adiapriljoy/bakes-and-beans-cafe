import axiosInstance from "./axiosInstance";

export async function fetchEmployee() {
  const response = await axiosInstance.get("/employee");
  return response.data.payload;
}
