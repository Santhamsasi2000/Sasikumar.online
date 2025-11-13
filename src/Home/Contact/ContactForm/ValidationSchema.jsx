import * as Yup from "yup";

const noNumbersRegex = /^[^0-9]*$/;

export const ValidationSchema = Yup.object({
  name: Yup.string()
    .matches(noNumbersRegex, "Name must not contain numbers")
    .min(3, "Name must be at least 3 characters long")
    .required("Your Name is required"),
  email: Yup.string().email("Invalid email address").required("Your Email is required"),
  message: Yup.string().max(500, "Message cannot exceed 500 characters"),
});
