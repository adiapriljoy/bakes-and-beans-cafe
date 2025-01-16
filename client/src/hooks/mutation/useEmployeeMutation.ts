import { useMutation } from "@tanstack/react-query";
import { exportEmployee } from "../../services/employee";
import { useToast } from "@chakra-ui/react";

export const useExportEmployee = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: exportEmployee,
    onSuccess: (result) => {
      const { data, response } = result;

      const contentDisposition = response?.headers["content-disposition"];
      const filenameMatch = contentDisposition?.match(/filename="([^"]*)"/);
      const filename = filenameMatch ? filenameMatch[1] : "employees.xlsx";

      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();

      toast({
        title: "Employees record exported!",
        description: `File name: ${filename}`,
        status: "success",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (error) => {
      console.error("Error exporting employee data:", error);
    },
  });
};
