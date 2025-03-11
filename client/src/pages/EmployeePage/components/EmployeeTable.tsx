import { Box, Flex, Td } from "@chakra-ui/react";
import React from "react";
import { useFetchEmployees } from "../../../hooks/queries/useEmployeeQueries";
import ReusableTable from "../../../components/table/ReusableTable";
import { IEmployee } from "../../../models/interface";
import useTableTool from "../../../hooks/useTableTool";
import EntriesSelector from "../../../components/table/EntriesSelector";
import SearchTable from "../../../components/table/SearchTable";
import EmployeeTableButton from "./EmployeeTableButton";
import { useEmployeeContext } from "../../../context/EmployeeContext";
import AddEmployeeForm from "./AddEmployeeForm";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box as any);

const EmployeeTable: React.FC = () => {
  const { data: employees } = useFetchEmployees();
  const { isShowAddEmployee } = useEmployeeContext();

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
    DEPARTMENT: "department",
    POSITION: "position",
    STATUS: "employmentStatus",
    "CIVIL STATUS": "civilStatus",
    "DATE HIRED": "dateHired",
  };

  return (
    <Box position="relative">
      <AnimatePresence>
        {!isShowAddEmployee && (
          <MotionBox
            key="table"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
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
          </MotionBox>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isShowAddEmployee && (
          <MotionBox
            key="add-employee"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            position="absolute"
            top={0}
            left={0}
            transform="translate(-50%, -50%)"
            width="100%"
          >
            <AddEmployeeForm />
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default EmployeeTable;
