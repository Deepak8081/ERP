// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";
// import logo from "../assets/logo.jpg";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [accessDenied, setAccessDenied] = useState(false);
//   const [deniedMessage, setDeniedMessage] = useState("");

//   const navigate = useNavigate();
//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       const response = await axios.post(
//         //"https://gitserp.in/api/v2/user/login",
//         " http://localhost:8000/api/v2/user/login",
//         {
//           userId: data.userId.trim(),
//           password: data.password.trim(),
//         }
//       );

//       if (response.status === 200) {
//         const { token, user } = response.data;
//         localStorage.setItem("token", token);

//         if (user.role === "admin") {
//           localStorage.setItem("adminId", user.userId);
//           localStorage.setItem("adminName", user.name);
//           localStorage.setItem("role", "admin");
//           navigate("/mainDashboard");
//         } else {
//           localStorage.setItem("userId", user.userId);
//           localStorage.setItem("userName", user.name);
//           localStorage.setItem("role", "user");
//           navigate("/dashboard");
//         }
//       }

//       setIsSubmitting(false);
//     } catch (error) {
//       setIsSubmitting(false);

//       if (error.response?.status === 403) {

//         setAccessDenied(true);
//         setDeniedMessage(
//           error.response?.data?.error || "Access Denied: Your IP is not allowed"
//         );
//         return;
//       }

//       const message =
//         error.response?.data?.message || "Login failed. Please try again.";
//       alert(message);
//     }
//   };


//   if (accessDenied) {
//     return (
//       <div className="flex h-screen items-center justify-center bg-red-100 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white shadow-2xl rounded-3xl p-10 max-w-md text-center"
//         >
//           <h1 className="text-3xl font-bold text-red-600 mb-4">🚫 Access Denied</h1>
//           <p className="text-gray-700 mb-6">{deniedMessage}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
//           >
//             Retry
//           </button>
//         </motion.div>
//       </div>
//     );
//   }


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-0 via-emerald-50 to-green-300 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-gray-200"
//       >
//         <motion.div
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="flex flex-col items-center mb-6"
//         >
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-22 h-22 rounded-full  mb-4 shadow-2xl ring-4 ring-gray-100 "
//           />
//         </motion.div>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               User ID
//             </label>
//             <input
//               {...register("userId", { required: "User ID is required" })}
//               type="text"
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//               placeholder="Enter your user ID"
//             />
//             {errors.userId && (
//               <p className="text-sm text-red-500 mt-1">
//                 {errors.userId.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: { value: 6, message: "Min 6 characters" },
//                 })}
//                 type={showPassword ? "text" : "password"}
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((prev) => !prev)}
//                 className="absolute top-3 right-3 text-sm text-green-600 font-medium hover:underline"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//             {errors.password && (
//               <p className="text-sm text-red-500 mt-1">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           <motion.button
//             type="submit"
//             disabled={isSubmitting}
//             whileTap={{ scale: 0.95 }}
//             className={`w-full py-3 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 cursor-pointer ${isSubmitting
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
//               }`}
//           >
//             {isSubmitting ? "Logging in..." : "Login"}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import erpimage from '../assets/erpimage.webp'
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  const [deniedMessage, setDeniedMessage] = useState("");
  const navigate = useNavigate();

  // 🔹 Configurable theme
  const brandColors = {
    primary: "from-green-600 to-emerald-700", // matches logo color
    ring: "ring-green-400",
    bgOverlay: "bg-gradient-to-br from-green-700/80 via-emerald-800/70 to-green-900/80",
  };

  // 🔹 Configurable background image
  const bgImage =
    erpimage;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v2/user/login",
        {
          userId: data.userId.trim(),
          password: data.password.trim(),
        }
      );

      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);

        if (user.role === "admin") {
          localStorage.setItem("adminId", user.userId);
          localStorage.setItem("adminName", user.name);
          localStorage.setItem("role", "admin");
          navigate("/mainDashboard");
        } else {
          localStorage.setItem("userId", user.userId);
          localStorage.setItem("userName", user.name);
          localStorage.setItem("role", "user");
          navigate("/dashboard");
        }
      }
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      if (error.response?.status === 403) {
        setAccessDenied(true);
        setDeniedMessage(
          error.response?.data?.error || "Access Denied: Your IP is not allowed"
        );
        return;
      }
      const message =
        error.response?.data?.message || "Login failed. Please try again.";
      alert(message);
    }
  };

  if (accessDenied) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-red-100 to-red-200 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-red-200"
        >
          <h1 className="text-3xl font-bold text-red-600 mb-4">🚫 Access Denied</h1>
          <p className="text-gray-700 mb-6">{deniedMessage}</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            Retry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side with Background Image */}
      <div className="hidden md:flex relative items-center justify-center text-white">
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${brandColors.bgOverlay}`}></div>
        <div className="relative text-center p-10">
          <img
            src={logo}
            alt="Logo"
            className={`w-32 h-32 mx-auto mb-6 rounded-full shadow-lg ring-4 ${brandColors.ring}`}
          />
          <h1 className="text-4xl font-bold mb-3">Welcome to ERP</h1>
          <p className="text-lg text-green-100 max-w-md mx-auto">
            Manage attendance, workflow, and reports with ease.
          </p>
        </div>
      </div>

      {/* Right Side (Login Form) */}
      <div className="flex items-center justify-center p-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
        >
          {/* Mobile Logo */}
          <div className="md:hidden text-center mb-6">
            <img
              src={logo}
              alt="Logo"
              className={`w-24 h-24 mx-auto mb-3 rounded-full shadow-md ring-4 ${brandColors.ring}`}
            />
            <h2 className="text-2xl font-bold text-gray-800">Welcome to ERP</h2>
            <p className="text-gray-500 text-sm">Login to continue</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* User ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User ID
              </label>
              <input
                {...register("userId", { required: "User ID is required" })}
                type="text"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Enter your user ID"
              />
              {errors.userId && (
                <p className="text-sm text-red-500 mt-1">{errors.userId.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                  })}
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-3 right-3 text-xs text-green-600 font-medium hover:underline"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-3 rounded-lg font-semibold text-white shadow-md transition-all duration-300 ${isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : `bg-gradient-to-r ${brandColors.primary} hover:from-green-700 hover:to-emerald-800`
                }`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

