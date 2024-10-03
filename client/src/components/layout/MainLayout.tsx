import { Box, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import useScreenPadding from "../../hooks/useScreenPadding";
import AdminNavigation from "../AdminNavigation";
import { IUserData } from "../../models/interface";
import UserNavigation from "../UserNavigation";

const MainLayout = () => {
  const { screenPadding: verticalPadding } = useScreenPadding({
    minPadding: 2,
    maxPadding: 6,
  });
  const { screenPadding: horizontalPadding } = useScreenPadding({
    minPadding: 2,
    maxPadding: 10,
  });

  const userData = localStorage?.getItem("userData");
  const parsedUserData: IUserData | null = userData
    ? JSON.parse(userData)
    : null;

  return (
    <Box h="100vh" py={verticalPadding} px={horizontalPadding}>
      {parsedUserData?.role === "Admin" ? (
        <AdminNavigation />
      ) : (
        <UserNavigation userData={parsedUserData} />
      )}
      <Stack marginTop={5} gap={5}>
        <Outlet />
      </Stack>
    </Box>
  );
};

export default MainLayout;
