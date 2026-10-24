import axios from "axios";

export let axiosInstance = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    let originalReq = error.config;

    if (error.response.status === 401 && !originalReq._retry) {
      originalReq._retry = true;

      try {
        await axiosInstance.get("/auth/get-accessToken");
        return axiosInstance(originalReq);
      } catch (error) {
        window.location.href = "/";
        return Promise.reject(error);
      }
    }
  },
);



// Ab samajh bhai, har cheez kya kar rahi hai


// 1. axios.create()

// Bhai, ye apna Axios instance banata hai.
// Isko apna API helper samajh le, jisse hum backend ko request bhejte hain.


// 2. baseURL

// Ye backend ka common URL hai.

// Agar hum likhein:
// axiosInstance.get("/employees");

// Toh poora URL banega:
// https://team-sync-backend-n78w.onrender.com/api/employees

// Har baar poora URL likhne ki zaroorat nahi.


// 3. withCredentials: true

// Ye browser ko request ke saath cookies bhejne deta hai.

// Hamare case mein refresh token cookie mein ho sakta hai.
// Backend us cookie ko check karke naya access token de sakta hai.


// 4. interceptors.response.use()

// Bhai, ye API ke response ko check karne ke liye hai.

// API sahi chali → pehla function chalega.
// API fail hui → doosra function chalega.

// Matlab har API mein alag se error handle karne ki zaroorat nahi.


// 5. error.config

// let originalReq = error.config;

// Maan le /employees API fail hui.

// error.config mein us API ki settings milti hain,
// jaise URL aur method.

// Hum un settings ko originalReq mein rakhte hain,
// taaki baad mein wahi API dobara call kar sakein.


// 6. error.response.status === 401

// Bhai, 401 ka matlab server request ko authenticate nahi kar paaya.

// Access token expire hua ho sakta hai,
// lekin har 401 ka reason expiry hi nahi hota.


// 7. !originalReq._retry

// Ye check karta hai ki hum is API ko pehle hi
// dobara try toh nahi kar chuke.

// _retry Axios ka feature nahi hai.
// Ye flag hum khud bana rahe hain.

// Pehle try nahi kiya → aage badho.
// Pehle hi try kar liya → dobara refresh ka chakkar mat chalao.


// 8. originalReq._retry = true

// Bhai, yahan hum mark kar dete hain ki is API ko
// dobara try karne ja rahe hain.

// Kyun?

// Taaki agar dobara 401 aa gaya,
// toh ye API baar-baar token refresh karne na lage.


// 9. try aur await

// await axiosInstance.get("/auth/get-accessToken");

// Ye backend se naya access token lene ki request hai.

// await ka simple matlab:
// Pehle refresh request ka result aane do,
// phir aage badho.

// Backend refresh token check karega.
// Sab sahi hua toh naya access token mil sakta hai.


// 10. return axiosInstance(originalReq)

// Bhai, ye poore code ki main line hai!

// Example:
// 1. /employees call hui.
// 2. 401 aaya.
// 3. Humne naya access token liya.
// 4. Ab /employees ko dobara call kiya.

// originalReq mein purani API ki settings hain,
// isliye wahi request dobara jaati hai.

// Dhyan rahe: naya token dobara call mein use bhi hona chahiye.
// Ye tumhare baaki auth code par depend karta hai.


// 11. catch (error)

// Agar naya access token lene wali request fail ho gayi,
// toh catch chalega.

// Jaise refresh token expire ho gaya ho
// ya backend se error aa gaya ho.


// 12. window.location.href = "/"

// Ye browser ko / page par le jaata hai.

// Matlab refresh fail hone par user ko doosre page par bhej rahe hain.


// 13. return Promise.reject(error)

// Ye error ko aage bhejta hai,
// taaki jis code ne API call ki thi,
// woh error ko handle kar sake.


// Bas ye 3 baatein pakki yaad rakh

// 1. Interceptor API errors ko ek hi jagah handle karta hai.
// 2. Refresh request naya access token lene ki koshish karti hai.
// 3. _retry usi API ko baar-baar refresh aur retry karne se rokta hai.


// Ek chhota code fix:

// Tere current code mein agar if condition false ho jaaye,
// toh error ko reject karne wala final
// return Promise.reject(error) bhi add karna chahiye.

// Aur error.response missing ho sakta hai,
// isliye production code mein usko safely check karna better hai.