import { Box, BoxProps } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface Props extends BoxProps {
  children: React.ReactNode;
  goTo: string;
}

const CustomMenu: React.FC<Props> = ({ children, goTo, ...rest }) => {
  const { bg } = rest;
  return (
    <Box
      as={NavLink}
      color={bg === "primary" ? "secondary" : "primary"}
      p="5px"
      borderRadius={30}
      fontSize={14}
      width="100px"
      textAlign="center"
      fontWeight="bold"
      shadow={bg === "primary" ? "md" : 0}
      to={goTo}
      {...rest}
      transition="all 0.3s ease-in-out"
      _hover={{
        background: bg === "primary" ? "primary" : "secondary",
        color: bg === "primary" ? "secondary" : "primary",
      }}
      _focus={{
        outline: "none"
      }}
    >
      {children}
    </Box>
  );
};

export default CustomMenu;
