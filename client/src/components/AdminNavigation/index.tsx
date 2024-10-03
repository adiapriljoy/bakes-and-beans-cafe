import {
  Button,
  Collapse,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { PATH } from "../../utils/pageRoutes";
import CustomMenu from "./components/CustomMenu";
import { HiOutlineCog } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import bakes_and_beans from "../../assets/bakes-and-bakes-logo.svg";
import { useLogout } from "../../hooks/useAuthMutation";

const AdminNavigation = () => {
  const { logout } = useLogout();
  const { pathname } = useLocation();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex justify="space-between" alignItems="center">
        <HStack gap={16} display={{ base: "none", lg: "flex" }}>
          <Image src={bakes_and_beans} w="71px" h="63px" />
          <HStack gap={5}>
            <CustomMenu
              goTo={PATH.HOME}
              bg={pathname === PATH.HOME ? "primary" : "background"}
            >
              HOME
            </CustomMenu>

            <CustomMenu
              goTo={PATH.PAYROLL}
              bg={pathname === PATH.PAYROLL ? "primary" : "background"}
            >
              PAYROLL
            </CustomMenu>

            <CustomMenu
              goTo={PATH.EMPLOYEE}
              bg={pathname === PATH.EMPLOYEE ? "primary" : "background"}
            >
              EMPLOYEE
            </CustomMenu>

            <CustomMenu
              goTo={PATH.PRODUCT}
              bg={pathname === PATH.PRODUCT ? "primary" : "background"}
            >
              PRODUCT
            </CustomMenu>

            <CustomMenu
              goTo={PATH.SALES}
              bg={pathname === PATH.SALES ? "primary" : "background"}
            >
              SALES
            </CustomMenu>

            <CustomMenu
              goTo={PATH.USERS}
              bg={pathname === PATH.USERS ? "primary" : "background"}
            >
              USERS
            </CustomMenu>
          </HStack>
        </HStack>

        <HStack gap={4} display={{ base: "none", lg: "flex" }}>
          <Icon
            as={FaRegCircleUser}
            color="accent"
            _hover={{ color: "primary" }}
            boxSize="20px"
          />
          <Icon
            as={HiOutlineCog}
            color="accent"
            _hover={{ color: "primary" }}
            boxSize="24px"
          />
          <Icon
            as={LuLogOut}
            color="accent"
            _hover={{ color: "primary", cursor: "pointer" }}
            boxSize="20px"
            onClick={logout}
          />
        </HStack>

        <Image
          src={bakes_and_beans}
          w="71px"
          h="63px"
          display={{ base: "flex", lg: "none" }}
        />
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          display={{ base: "flex", lg: "none" }}
          onClick={onToggle}
          bg="primary"
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing={4} py={4} px={4} display={{ base: "flex", lg: "none" }}>
          <Button variant="link" color="text" as={NavLink} to={PATH.HOME}>
            HOME
          </Button>
          <Divider />
          <Button variant="link" color="text"  as={NavLink} to={PATH.PAYROLL}>
            PAYROLL
          </Button>
          <Divider />
          <Button variant="link" color="text"  as={NavLink} to={PATH.EMPLOYEE}>
            EMPLOYEE
          </Button>
          <Divider />
          <Button variant="link" color="text"  as={NavLink} to={PATH.PRODUCT}>
            PRODUCT
          </Button>
          <Divider />
          <Button variant="link" color="text"  as={NavLink} to={PATH.SALES}>
            SALES
          </Button>
          <Divider />
          <Button variant="link" color="text"  as={NavLink} to={PATH.USERS}>
            USERS
          </Button>
        </Stack>
      </Collapse>
    </>
  );
};

export default AdminNavigation;
