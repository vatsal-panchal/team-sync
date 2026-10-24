import axios from "axios";

// axios.create() creates a reusable Axios instance for API calls.
export let axiosInstance = axios.create({
  // Base URL used at the start of every API request.
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",

  // Send cookies with requests, needed for cookie-based login.
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
 async (error) => {
    let originalReq = error.config

    
    if(error.response.status === 401 && !originalReq._retry){
      originalReq._retry = true


      try {

        await axiosInstance.get("/auth/get-accessToken")
        return axiosInstance(originalReq)

      } catch (error) {
        window.location.href  = "/"
        return Promise.reject(error)
      }
    }
  },
);
