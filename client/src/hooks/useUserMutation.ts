import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../services/user";
import { useToast } from "@chakra-ui/react";
import { ErrorHandling } from "../utils/ErrorHandling";

export const useCreateUser = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast({
        variant: "left-accent",
        title: "Succesfully added",
        status: "success",
        isClosable: true,
        position: "bottom-right",
      });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: unknown) => {
      const errorResult = ErrorHandling(error);
      toast({
        variant: "left-accent",
        title: errorResult,
        status: "error",
        isClosable: true,
        position: "bottom-right",
      });
    },
  });
};
