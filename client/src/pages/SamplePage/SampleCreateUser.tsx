import {
  Card,
  CardBody,
  Stack,
  Input,
  CardFooter,
  Button,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IUserForm } from "../../models/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserSchema } from "../../models/schemaValidation/userSchema";
import { useCreateUser } from "../../hooks/useUserMutation";
import { Link, useNavigate } from "react-router-dom";

const SampleCreateUser = () => {
    const navigate = useNavigate();
    const { 
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm<IUserForm>({ 
        mode:"onChange", 
        resolver: yupResolver(createUserSchema)
    });

    const createUserMutation = useCreateUser();

    const onSubmit = async (newUser:IUserForm) => {
        const result = await createUserMutation.mutateAsync(newUser);
        if (result) navigate("/sample"); 
    }

  return (
    <VStack>
        <Button as={Link} to="/sample">See users</Button>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Card variant="filled" size="lg" w="md">
            <CardBody>
            <Stack spacing={4}>
                <Box>
                    <Input 
                    {...register("firstname")}
                    isInvalid={errors.firstname ? true : false}
                    type="text" 
                    placeholder="First name" 
                    autoComplete="off"
                    size="lg" />
                    <Text color="danger" as="sub">
                        {errors.firstname?.message}
                    </Text>
                </Box>
                <Box>
                    <Input 
                    {...register("lastname")}
                    isInvalid={errors.lastname ? true : false}
                    type="text" 
                    placeholder="Last name" 
                    autoComplete="off"
                    size="lg" />
                    <Text color="danger" as="sub">
                        {errors.lastname?.message}
                    </Text>
                </Box>
                <Box>
                    <Input 
                        {...register("role")}
                        isInvalid={errors.role ? true : false}
                        type="text" 
                        placeholder="Role" 
                        autoComplete="off"
                        size="lg" />
                    <Text color="danger" as="sub">
                        {errors.role?.message}
                    </Text>
                </Box>
                <Box>
                    <Input 
                        {...register("username")}
                        isInvalid={errors.username ? true : false}
                        type="text" 
                        placeholder="Username" 
                        autoComplete="off"
                        size="lg" />
                    <Text color="danger" as="sub">
                        {errors.username?.message}
                    </Text>
                </Box>
                <Box>
                    <Input 
                    {...register("password")}
                    isInvalid={errors.password ? true : false}
                    type="password" 
                    placeholder="Password" 
                    autoComplete="off"
                    size="lg" />
                    <Text color="danger" as="sub">
                        {errors.password?.message}
                    </Text>
                </Box>
            </Stack>
            </CardBody>
            <CardFooter marginBottom="1rem">
            <Button
                w="full"
                variant="rounded"
                type="submit"
            >
                SUBMIT
            </Button>
            </CardFooter>
        </Card>
        </form>
    </VStack>
  );
};

export default SampleCreateUser;