import { Box, Button, Flex, Td } from "@chakra-ui/react";
import React from "react";
import { useFetchEmployees } from "../../../hooks/queries/useEmployeeQueries";
import ReusableTable from "../../../components/table/ReusableTable";
import { IEmployee } from "../../../models/interface";
import useTableTool from "../../../hooks/useTableTool";
import EntriesSelector from "../../../components/table/EntriesSelector";
import SearchTable from "../../../components/table/SearchTable";

const EmployeeTable: React.FC = () => {
  const { data: employees } = useFetchEmployees();

  const {
    search,
    entries,
    currentPage,
    totalPages,
    currentData,
    setEntries,
    setSearch,
    setCurrentPage,
    handleNextPage,
    handlePreviousPage,
  } = useTableTool({
    data: employees || [],
    searchFields: (employee: IEmployee) => [
      employee.id.toString(),
      `${employee.firstName} ${employee.lastName}`,
      employee.department,
      employee.position,
      employee.employmentStatus,
      employee.civilStatus,
      employee.dateHired,
    ],
  });

  const columnMap: { [key: string]: string } = {
    "EMPLOYEE ID": "id",
    "EMPLOYEE NAME": "fullName",
    "DEPARTMENT": "department",
    "POSITION": "position",
    "STATUS": "employmentStatus",
    "CIVIL STATUS": "civilStatus",
    "DATE HIRED": "dateHired",
  };
  
  return (
    <Box>
      <SearchTable search={search} setSearch={setSearch} />
      <Box p={6} bg="secondary" borderRadius="md" boxShadow="md">
        <Flex justify="space-between" align="center" mb={5}>
          <Flex gap={2} align="center">
            <EntriesSelector
              entries={entries}
              setEntries={setEntries}
              setCurrentPage={setCurrentPage}
            />
          </Flex>
          <Flex gap={2}>
            <Button variant="outline">IMPORT</Button>
            <Button variant="outline">EXPORT</Button>
            <Button>ADD EMPLOYEE</Button>
          </Flex>
        </Flex>
        <ReusableTable
          headers={[
            "EMPLOYEE ID",
            "EMPLOYEE NAME",
            "DEPARTMENT",
            "POSITION",
            "STATUS",
            "CIVIL STATUS",
            "DATE HIRED",
          ]}
          columnMap={columnMap}
          data={currentData || []}
          renderRow={(employee) => (
            <>
              <Td>{employee.id}</Td>
              <Td>{`${employee.firstName} ${employee.lastName}`}</Td>
              <Td>{employee.department}</Td>
              <Td>{employee.position}</Td>
              <Td>{employee.employmentStatus}</Td>
              <Td>{employee.civilStatus}</Td>
              <Td>{employee.dateHired}</Td>
            </>
          )}
          entriesPerPage={entries}
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
        />
      </Box>
    </Box>
  );
};

export default EmployeeTable;
