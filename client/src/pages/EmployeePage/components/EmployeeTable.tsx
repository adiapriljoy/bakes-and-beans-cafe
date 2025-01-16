import { Box, Flex, Td } from "@chakra-ui/react";
import React from "react";
import { useFetchEmployees } from "../../../hooks/queries/useEmployeeQueries";
import ReusableTable from "../../../components/table/ReusableTable";
import { IEmployee } from "../../../models/interface";
import useTableTool from "../../../hooks/useTableTool";
import EntriesSelector from "../../../components/table/EntriesSelector";
import SearchTable from "../../../components/table/SearchTable";
import EmployeeTableButton from "./EmployeeTableButton";

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
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justify="space-between"
          align={{ base: "stretch", md: "center" }}
          mb={5}
          gap={{ base: 4, md: 2 }}
        >
          <Flex gap={2} align="center">
            <EntriesSelector
              entries={entries}
              setEntries={setEntries}
              setCurrentPage={setCurrentPage}
            />
          </Flex>
          <EmployeeTableButton />
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
