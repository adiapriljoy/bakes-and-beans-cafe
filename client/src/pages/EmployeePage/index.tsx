import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import { Box } from "@chakra-ui/react";
import { EmployeeContextProvider } from "../../context/EmployeeContext";

const EmployeePage: React.FC = () => {
  return (
    <EmployeeContextProvider>
      <Box>
        <EmployeeTable />
      </Box>
    </EmployeeContextProvider>
  );
};

export default EmployeePage;
