import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
  Td,
} from "@chakra-ui/react";
import React, { ReactNode, ReactElement } from "react";
import useTableSort from "../../hooks/useTableSort";

interface TableProps<T> {
  headers: string[];
  data: T[];
  columnMap: { [key: string]: string };
  renderRow: (item: T) => React.ReactNode;
  entriesPerPage?: number;
  currentPage: number;
  totalPages: number;
  onNext?: () => void;
  onPrevious?: () => void;
}

const ReusableTable = <T,>({
  headers,
  columnMap,
  data,
  renderRow,
  currentPage,
  totalPages,
  onNext,
  onPrevious,
}: TableProps<T>) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { sortedData, handleSort, sortColumn, sortDirection } = useTableSort(
    data,
    columnMap
  );

  const getChildValue = (element: ReactNode, index: number): ReactNode => {
    if (
      React.isValidElement(element) &&
      React.isValidElement(element.props.children[index])
    ) {
      return (element.props.children[index] as ReactElement).props.children;
    }
    return null;
  };

  return (
    <Box
      p={6}
      bg="background"
      borderRadius="lg"
      border="1px solid"
      borderColor="borderGray"
      boxShadow="md"
    >
      {isMobile ? (
        <Box>
          {sortedData.map((item, index) => (
            <Box
              key={index}
              p={4}
              mb={4}
              bg="white"
              borderRadius="md"
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.200"
            >
              {headers.map((header, idx) => (
                <Flex key={idx} justify="space-between" mb={2}>
                  <Text fontWeight="bold">{header}</Text>
                  <Text>{getChildValue(renderRow(item), idx)}</Text>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
      ) : (
        <Box>
          <Table variant="unstyled">
            <Thead>
              <Tr>
                {headers.map((header) => (
                  <Th
                    key={header}
                    onClick={() => handleSort(header)}
                    cursor="pointer"
                    textTransform="capitalize"
                    role="button"
                    aria-label={`Sort by ${header}`}
                  >
                    <Flex align="center">
                      {header}
                      {sortColumn === columnMap[header] && (
                        <Text ml={2} fontSize="sm">
                          {sortDirection === "asc" ? "▲" : "▼"}
                        </Text>
                      )}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody
              sx={{
                "& tr": {
                  borderTop: "1px solid",
                  borderColor: "borderGray",
                },
              }}
            >
              {sortedData.length === 0 ? (
                <Tr>
                  <Td colSpan={headers.length} textAlign="center">
                    No records
                  </Td>
                </Tr>
              ) : (
                sortedData.map((item, index) => (
                  <Tr key={index}>{renderRow(item)}</Tr>
                ))
              )}
            </Tbody>
          </Table>
          <Flex
            justify="right"
            align="center"
            mt={4}
            display={sortedData.length === 0 ? "none" : "flex"}
          >
            <IconButton
              aria-label="Previous"
              icon={<ChevronLeftIcon fontSize="larger" />}
              onClick={onPrevious}
              isDisabled={currentPage === 1}
              variant="ghost"
            />
            <Text mx={4}>
              {currentPage} of {totalPages}
            </Text>
            <IconButton
              aria-label="Next"
              icon={<ChevronRightIcon fontSize="larger" />}
              onClick={onNext}
              isDisabled={currentPage === totalPages}
              variant="ghost"
            />
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ReusableTable;
