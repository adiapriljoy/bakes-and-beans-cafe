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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(event.target.files[0]);
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
              {employee.photoUrl ? (
                <Image
                  src={employee.photoUrl}
                  boxSize="64px"
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
            />
          </Stack>

          {/* Personal Information */}
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input {...register("lastName")} />
            </FormControl>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input {...register("firstName")} />
            </FormControl>
            <FormControl>
              <FormLabel>Middle Name</FormLabel>
              <Input {...register("middleName")} />
            </FormControl>
            <FormControl>
              <FormLabel>Suffix</FormLabel>
              <Input {...register("suffix")} />
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
              />
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select {...register("gender")}>
                <option>Male</option>
                <option>Female</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Nationality</FormLabel>
              <Select {...register("nationality")}>
                {nationalityOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Civil Status</FormLabel>
              <Select {...register("civilStatus")}>
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
              <Select {...register("department")}>
                {departmentOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Position</FormLabel>
              <Select {...register("position")}>
                {positionOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Employment Status</FormLabel>
              <Select {...register("employmentStatus")}>
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
                <Input {...register("email")} placeholder="Enter email" />
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
