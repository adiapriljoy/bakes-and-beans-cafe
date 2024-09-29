import { Box, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import useScreenPadding from "../../hooks/useScreenPadding";

const AdminLayout = () => {
  const { screenPadding: verticalPadding } = useScreenPadding({
    minPadding: 2,
    maxPadding: 6,
  });
  const { screenPadding: horizontalPadding } = useScreenPadding({
    minPadding: 2,
    maxPadding: 10,
  });
  return (
    <Box h="100vh" py={verticalPadding} px={horizontalPadding}>
      <Stack marginTop={5} gap={5}>
        <Outlet />
      </Stack>
    </Box>
  );
};

export default AdminLayout;
