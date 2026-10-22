import { useForm } from "react-hook-form";
import {useNavigate} from "react-router"
import {useDispatch} from "react-redux"
import { loginEmployee } from "../state/auth/authAction";

export const useAuth = () => {

    let dispatch = useDispatch()
    let navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log(data);
    reset()
  };

  const onLoginSubmit = (data) => {
   dispatch(loginEmployee(data))
    reset()
  };

  return {
    register,
    handleSubmit,
    errors,
    onLoginSubmit,
    onRegisterSubmit,
    navigate
  };
};
