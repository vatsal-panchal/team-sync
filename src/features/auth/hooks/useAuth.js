
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginEmployee } from "../state/auth/authAction";

// Keep form and login related functions in one place.
export const useAuth = () => {
  // dispatch sends actions to Redux.
  let dispatch = useDispatch();

  // navigate helps move to another page.
  let navigate = useNavigate();

  const {
    register, // Connect input fields with React Hook Form.
    handleSubmit, // Check the form and call the submit function.
    reset, // Clear all form fields.
    formState: { errors }, // Store form validation errors.
  } = useForm(); // Manage form data and validation.

  // Run when the register form is submitted.
  const onRegisterSubmit = (data) => {
    console.log(data); // Show the form data in the console.
    reset(); // Clear the form after submission.
  };

  // Run when the login form is submitted.
  const onLoginSubmit = (data) => {
    // Send login details to Redux to start the login API request.
    dispatch(loginEmployee(data));
    reset(); // Clear the form fields.
  };


  // Make these functions and values available to components.
  return {
    register,
    handleSubmit,
    errors,
    onLoginSubmit,
    onRegisterSubmit,
    navigate,
  };
};

//ok las me sab karugaa
//ok las me sab karugaa
//ok las me sab karugaa
//ok las me sab karugaa
