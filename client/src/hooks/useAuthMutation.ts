import { useMutation } from "@tanstack/react-query"
import { authLogin } from "../services/authentication"
import Cookies from "js-cookie";
import { ILogin } from "../models/interface";
import { useNavigate } from "react-router-dom";
import { PATH } from "../utils/pageRoutes";
import { useToast } from "@chakra-ui/react";
import { ErrorHandling } from "../utils/ErrorHandling";

export const useLogin = () => {
    const navigate = useNavigate();
    const toast = useToast();
    return useMutation({
        mutationFn: authLogin,
        onSuccess: (data: any) => {
            const resp = data?.payload;
            const userData: ILogin = {
                username: resp?.username,
                firstName: resp?.firstName,
                lastName: resp?.lastName,
                mobileNumber: resp?.mobileNumber,
                emailAddress: resp?.emailAddress,
                role: resp?.role,
                status: resp?.status,
            }
            Cookies.set("jwtToken", resp?.accessToken);
            localStorage.setItem("userData", JSON.stringify(userData));
            navigate(PATH.HOME);
            toast({
                title: `Hi, ${userData.firstName}!`,
                description: "You’re now logged in and can perform transactions.",
                status: "success",
                duration: 9000,
                isClosable: true,
                position: "top-right",
            })
        },
        onError: (error: unknown) => {
            const errorResult = ErrorHandling(error);
            toast({
                title: errorResult,
                status: "error",
                isClosable: true,
                position: "top-right",
            });
        }
    })
}