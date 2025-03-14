import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Stack,
  Image,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useEmployeeContext } from "../../../context/EmployeeContext";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useFetchEmpSelectOptions } from "../../../hooks/queries/useEmployeeQueries";

const AddEmployeeForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [dob, setDob] = useState<string | null>("");
  const [dateHired, setDateHired] = useState<string | null>("");
  const [image, setImage] = useState<string | null>(null);
  const { setShowAddEmployee } = useEmployeeContext();

  const { data: civilStatusOptions } = useFetchEmpSelectOptions("civil_status");
  const { data: departmentOptions } = useFetchEmpSelectOptions("department");
  const { data: nationalityOptions } = useFetchEmpSelectOptions("nationality");
  const { data: positionOptions } = useFetchEmpSelectOptions("position");
  const { data: empStatusOptions } = useFetchEmpSelectOptions("emp_status");

  const employee = {
    photoUrl: "",
  };
  const onSubmit = (data: any) => {
    console.log({ ...data, dob, dateHired, image });
  };

  const toast = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "The uploaded image must be 5MB or smaller.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        event.target.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5} align="stretch">
          {/* Profile Image Upload */}
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            align="center"
          >
            <Box
              w="10rem"
              h="10rem"
              borderRadius="md"
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="gray.100"
              mr={4}
            >
              {image || employee.photoUrl ? (
                <Image
                  src={image || employee.photoUrl}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  alt="Employee Avatar"
                />
              ) : (
                <Icon
                  as={MdOutlinePersonOutline}
                  boxSize="7rem"
                  color="gray.500"
                />
              )}
            </Box>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              maxW="320px"
              mt="auto"
              border="transparent"
              boxShadow="transparent"
              isRequired
            />
          </Stack>

          {/* Personal Information */}
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                {...register("lastName")}
                placeholder="Enter last name"
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                {...register("firstName")}
                placeholder="Enter first name"
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel>Middle Name</FormLabel>
              <Input
                {...register("middleName")}
                placeholder="Enter middle name"
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel>Suffix</FormLabel>
              <Input {...register("suffix")} placeholder="Enter suffix" />
            </FormControl>
          </Stack>

          {/* Additional Information */}
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <FormControl>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                value={dob || ""}
                onChange={(e) => setDob(e.target.value)}
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select {...register("gender")} defaultValue="" isRequired>
                <option value="" disabled>
                  Select gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Nationality</FormLabel>
              <Select {...register("nationality")} defaultValue="" isRequired>
                <option value="" disabled>
                  Select nationality
                </option>
                {nationalityOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Civil Status</FormLabel>
              <Select {...register("civilStatus")} defaultValue="" isRequired>
                <option value="" disabled>
                  Select civil status
                </option>
                {civilStatusOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>

          {/* Employment Details */}
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <FormControl>
              <FormLabel>Department</FormLabel>
              <Select {...register("department")} defaultValue="" isRequired>
                <option value="" disabled>
                  Select department
                </option>
                {departmentOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Position</FormLabel>
              <Select {...register("position")} defaultValue="" isRequired>
                <option value="" disabled>
                  Select position
                </option>
                {positionOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Employment Status</FormLabel>
              <Select
                {...register("employmentStatus")}
                defaultValue=""
                isRequired
              >
                <option value="" disabled>
                  Select employment status
                </option>
                {empStatusOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Date Hired</FormLabel>
              <Input
                type="date"
                value={dateHired || ""}
                onChange={(e) => setDateHired(e.target.value)}
                isRequired
              />
            </FormControl>
          </Stack>

          {/* Contact Details */}
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            w={{ base: "100%", md: "75%" }}
          >
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <InputGroup>
                <Input
                  {...register("email")}
                  placeholder="Enter email"
                  isRequired
                />
                <InputRightAddon children="@gmail.com" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Contact Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+63" />
                <Input
                  {...register("contactNumber")}
                  placeholder="Enter contact number"
                  type="number"
                  isRequired
                />
              </InputGroup>
            </FormControl>
          </Stack>

          {/* Buttons */}
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            justify="end"
            mt={5}
          >
            <Button
              variant="outline"
              colorScheme="yellow"
              onClick={() => setShowAddEmployee(false)}
            >
              Cancel
            </Button>
            <Button colorScheme="yellow" type="submit">
              Submit
            </Button>
          </Stack>
        </VStack>
      </form>
    </Box>
  );
};

export default AddEmployeeForm;
