import { object, string } from "yup";
import { FieldSizes } from "../../utils/constant";

export const loginSchema = object().shape({
  username: string()
    .required("Username is required!")
    .min(FieldSizes.UsernameMinimum, `Minimum of at least ${FieldSizes.UsernameMinimum} characters`),
  password: string()
    .required("Password is required!")
    .min(FieldSizes.PasswordMinimum, `Minimum of at least ${FieldSizes.PasswordMinimum} characters`),
});
