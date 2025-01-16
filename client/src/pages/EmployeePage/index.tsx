import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import { Box } from "@chakra-ui/react";

const EmployeePage: React.FC = () => {
  return (
    <Box>
      <EmployeeTable />
    </Box>
  );
};

export default EmployeePage;
