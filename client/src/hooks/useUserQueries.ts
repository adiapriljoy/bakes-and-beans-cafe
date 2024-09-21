import { useQuery } from "@tanstack/react-query"
import { IUser } from "../models/interface"
import { fetchUser } from "../services/user"

export const useFetchUsers = () => {
    return useQuery<IUser[]>({
        queryKey: ["users"],
        queryFn: () => fetchUser(),
    });
};