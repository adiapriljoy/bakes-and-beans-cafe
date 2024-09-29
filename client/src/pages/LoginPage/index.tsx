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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import bakes_and_beans from "../../assets/bakes-and-bakes-logo.svg";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";

const LoginPage = () => {
  
  const toast = useToast();
  const [ isShowPassword, setShowPassword] = useState<boolean>(false);
  const handleClickPassword = () => setShowPassword(!isShowPassword);

  return (
    <>
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
                <AiOutlineUser color="primaryDark" fontSize="1.5rem" opacity=".8"/>
              </InputLeftElement>
              <Input type="text" placeholder="Username"/>
            </InputGroup>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <MdLockOutline color="primaryDark" fontSize="1.5rem" opacity=".7"/>
              </InputLeftElement>
              <Input 
                type={isShowPassword ? "text" : "password" }
                placeholder="Password" />
              <InputRightElement
                onClick={handleClickPassword}
                cursor="pointer">
                {isShowPassword ?
                  <AiOutlineEye color="primaryDark" fontSize="1.2rem" opacity=".8"/>
                  :<AiOutlineEyeInvisible color="primaryDark" fontSize="1.2rem" opacity=".8"/>
                }
              </InputRightElement>
            </InputGroup>
          </Stack>
        </CardBody>
        <CardFooter marginBottom="1rem">
            <Button w="full" 
              variant="rounded"
              onClick={() =>
                toast({
                  title: 'Account created.',
                  description: "We've created your account for you.",
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                  variant: "subtle"
                })
              }
            > LOG IN </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginPage;
