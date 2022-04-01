import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, "Sorry, this name looks too short")
    .max(20, "Sorry, could you use a shorthand version of your name?")
    .required("Please enter your name."),
  email: yup
    .string()
    .trim()
    .email("That doesn't look like a valid email address")
    .required("Please enter your email address."),
  message: yup
    .string()
    .trim()
    .min(20, "Please enter a thoughtful message.")
    .max(
      256,
      "Please enter a shorter message. If you'd like to send a longer message, please send it directly."
    )
    .required("Please enter your message"),
});
