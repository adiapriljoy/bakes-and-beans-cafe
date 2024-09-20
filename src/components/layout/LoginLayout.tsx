import { Center } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout:React.FC = () => {
  return (
    <Center h="100vh" w="100vw" bg="background">
      <Outlet />
    </Center>
  );
};

export default LoginLayout;
