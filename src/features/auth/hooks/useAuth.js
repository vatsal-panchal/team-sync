import { useForm } from "react-hook-form";
import {useNavigate} from "react-router"
export const useAuth = () => {


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
    console.log(data);
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
