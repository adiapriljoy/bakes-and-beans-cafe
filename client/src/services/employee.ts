import axiosInstance from "./axiosInstance";

const basePath = "/employee";

export async function fetchEmployee() {
  const response = await axiosInstance.get(`${basePath}`);
  return response.data.payload;
}

export async function exportEmployee() {
  const response = await axiosInstance.get(`${basePath}/export`, {
    responseType: "blob",
  });
  return { data: response.data, response };
}

export async function fetchEmpSelectOptions(selectType: string) {
  const response = await axiosInstance.get(
    `${basePath}/selectOptions?selectType=${selectType}`
  );
  return response.data.payload;
}
