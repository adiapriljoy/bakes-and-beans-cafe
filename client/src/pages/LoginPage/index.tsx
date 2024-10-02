import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import bakes_and_beans from "../../assets/bakes-and-bakes-logo.svg";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "../../models/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../models/schemaValidation/loginSchema";
import { useLogin } from "../../hooks/useAuthMutation";

const LoginPage = () => {
  const loginMutation = useLogin();
  const [isShowPassword, setShowPassword] = useState<boolean>(false);
  const handleClickPassword = () => setShowPassword(!isShowPassword);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    await loginMutation.mutateAsync(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card variant="filled" size="lg" w="md">
        <CardHeader>
          <Center>
            <Image src={bakes_and_beans} alt="Bakes and Beans Café" />
          </Center>
        </CardHeader>
        <CardBody>
          <Stack spacing={4}>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <AiOutlineUser
                  color="primaryDark"
                  fontSize="1.5rem"
                  opacity=".8"
                />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Username"
                {...register("username")}
                isInvalid={errors.username ? true : false}
                isDisabled={loginMutation.isPending}
              />
            </InputGroup>
            {errors?.username && (
              <Text color="danger" mt={-3}>
                {errors?.username?.message}
              </Text>
            )}
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <MdLockOutline
                  color="primaryDark"
                  fontSize="1.5rem"
                  opacity=".7"
                />
              </InputLeftElement>
              <Input
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                isInvalid={errors.password ? true : false}
                isDisabled={loginMutation.isPending}
              />
              <InputRightElement onClick={handleClickPassword} cursor="pointer">
                {isShowPassword ? (
                  <AiOutlineEye
                    color="primaryDark"
                    fontSize="1.2rem"
                    opacity=".8"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    color="primaryDark"
                    fontSize="1.2rem"
                    opacity=".8"
                  />
                )}
              </InputRightElement>
            </InputGroup>
            {errors?.password && (
              <Text color="danger" mt={-3}>
                {errors?.password?.message}
              </Text>
            )}
          </Stack>
        </CardBody>
        <CardFooter marginBottom="1rem">
          <Button
            w="full"
            variant="rounded"
            type="submit"
            isLoading={loginMutation.isPending}
            loadingText="Logging in..."
          >
            LOG IN
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default LoginPage;
