import axios from "axios";
// config

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// axiosInstance.interceptors.response.use(
//   (res) => res,
//   (error) =>
//     Promise.reject(
//       (error.response && error.response.data) || "Something went wrong"
//     )
// );

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  //   const token = process.env.NEXT_PUBLIC_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  auth: {
    signUp: "/auth/register",
    signIn: "/auth/login",
  },
  user: {
    profile: "/user/get/info",
    lecture: {
      taken: "/user/get/lecture/list",
      pass: "/user/get/lecture/subject",
    },
    like: "/user/subjectFavorites",
    plan: {
      addTable: "/user/addPlanTable",
      addLecture: "/user/addPlanLecture",
    },
    graduate: {
      list: "/user/PlanInfo",
      // detail: '/user/get',
    },
  },
};
