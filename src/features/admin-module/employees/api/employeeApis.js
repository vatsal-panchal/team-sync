import { axiosInstance } from "../../../../config/axiosInstance";

export const getALLEmployee = async () => {
  try {
    let res = await axiosInstance.get("/employee");
    return res.data.data;
  } catch (error) {
    console.log("error in get all employee api", error);
  }
};
