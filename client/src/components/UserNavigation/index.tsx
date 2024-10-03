import { Flex, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { LuLogOut } from "react-icons/lu";
import bakes_and_beans from "../../assets/bakes-and-bakes-logo.svg";
import { IUserData } from "../../models/interface";
import { useEffect, useState } from "react";
import { useLogout } from "../../hooks/useAuthMutation";

const UserNavigation = ({ userData }: { userData: IUserData | null }) => {
  const { logout } = useLogout();
  const [currentTime, setCurrentTime] = useState(new Date());

  const formatDate = (date: Date) => {
    const datePart = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const timePart = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${datePart} ${timePart}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = formatDate(currentTime);

  return (
    <>
      <Flex justify="space-between" alignItems="center">
        <HStack gap={10}>
          <Image src={bakes_and_beans} w="95px" h="86px" />
          <VStack align="left" gap={0}>
            <Text fontSize="2xl" fontWeight="bold" color="primary">
              HI, {userData?.firstName?.toUpperCase()}!
            </Text>
            <Text fontSize="md" color="primary">
              {formattedDate}
            </Text>
          </VStack>
        </HStack>
        <HStack gap={4}>
          <Icon
            as={LuLogOut}
            color="primary"
            _hover={{ color: "primaryDark", cursor: "pointer" }}
            boxSize="20px"
            onClick={logout}
          />
        </HStack>
      </Flex>
    </>
  );
};

export default UserNavigation;
