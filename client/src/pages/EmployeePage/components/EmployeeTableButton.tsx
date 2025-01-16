import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import { useExportEmployee } from "../../../hooks/mutation/useEmployeeMutation";

const EmployeeTableButton: React.FC = () => {
  const { mutate: exportEmployee } = useExportEmployee();

  return (
    <Flex gap={2} justify={{ base: "flex-start", md: "flex-end" }} wrap="wrap">
      <Button variant="outline" w={{ base: "100%", sm: "auto" }}>
        IMPORT
      </Button>
      <Button
        variant="outline"
        w={{ base: "100%", sm: "auto" }}
        onClick={() => exportEmployee()}
      >
        EXPORT
      </Button>
      <Button w={{ base: "100%", sm: "auto" }}>ADD EMPLOYEE</Button>
    </Flex>
  );
};

export default EmployeeTableButton;
