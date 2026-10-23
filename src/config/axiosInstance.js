import axios from "axios";

// axios.create = API requests ke liye custom Axios instance banata hai
export const axiosInsatnce = axios.create({
  // Backend API ka base URL hai, jiske aage endpoint add hota hai
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",

  // Agar backend login ke baad cookie set karta hai,
  // toh ye option API requests ke saath cookies bhejne aur
  // backend se aane wali cookies ko accept karne mein help karta hai.
  withCredentials: true,
});
