import { object, string } from "yup";
import { FieldSizes } from "../../utils/constant";

export const createUserSchema = object().shape({
  firstname: string().required("First name is required!"),
  lastname: string().required("Last name is required!"),
  username: string()
    .required("Username is required!")
    .min(
      FieldSizes.UsernameMinimum, 
      `Username must be at least ${FieldSizes.UsernameMinimum} characters long.`
    )
    .max(
      FieldSizes.UsernameMaximum,
      `Username must be at most ${FieldSizes.UsernameMaximum} characters long.`
    ),
  password: string().required("Password is required!"),
  role: string().required("Role is required!"),
});
