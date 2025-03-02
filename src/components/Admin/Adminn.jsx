


// import React, { useState, useContext } from 'react';
// import '../../components/Admin/Adminn.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { StoreContext } from '../../Context/StoreContext';


// const AdminLoginPopUp = ({ setShowAdminLogin }) => {
//   const [currState, setCurrState] = useState("Login");
//   const navigate = useNavigate();
//   const { url, setToken } = useContext(StoreContext);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "",
//   });

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   // ✅ Function to set the token inside cookies
//   // console.log("token:--->",token)
//   const setTokenCookie = (token) => {
//     document.cookie = `token=${token}; path=/; max-age=${2 * 60 * 60}; Secure; SameSite=Strict`;
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
    
//     let newUrl = url + (currState === 'Login' ? '/api/v1/admin/login' : '/api/v1/admin/add');

//     try {
//       const response = await axios.post(newUrl, formData);
//       console.log("Response:", response);

//       if (response.data.success) {
//         const token = response.data.token;
//         console.log("token:--->",token)
        
//         // ✅ Store token in React state
//         setToken(token);

//         // ✅ Store token in cookies
//         setTokenCookie(token);

//         console.log("Phone (Frontend):", response.data.phone);
//         console.log("Token (Frontend):", token);
        
//         // ✅ Close login popup and navigate
//         setShowAdminLogin(false);
//         navigate('/add');
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error("Login Error:", error.response?.data || error.message);
//       alert("Something went wrong! Please try again.");
//     }
//   };

//   return (
//     <div className='login-popup'>
//       <form onSubmit={onLogin} className='login-popup-container'>
//         <div className='login-popup-title'>
//           <h2>{currState}</h2>
//           <img 
//             onClick={() => setShowAdminLogin(false)} 
//             src="https://logowik.com/content/uploads/images/close1437.jpg" 
//             alt="Close" 
//           />
//         </div>

//         <div className='login-popup-inputs'>
//           {currState === "Sign Up" && (
//             <>
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={onChangeHandler}
//                 type="text"
//                 placeholder="Name"
//                 required
//               />
//               <input
//                 name="phone"
//                 value={formData.phone}
//                 onChange={onChangeHandler}
//                 type="tel"
//                 placeholder="Phone Number"
//                 pattern="[0-9]{10}"
//                 required
//               />
//             </>
//           )}
//           <input
//             name="email"
//             value={formData.email}
//             onChange={onChangeHandler}
//             type="email"
//             placeholder="Email"
//             required
//           />
//           <input
//             name="password"
//             value={formData.password}
//             onChange={onChangeHandler}
//             type="password"
//             placeholder="Password"
//             required
//           />
//           <input
//             name="role"
//             value={formData.role}
//             onChange={onChangeHandler}
//             type="role"
//             placeholder="Role"
//             required
//           />
//         </div>

//         <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

//         <div className='login-popup-condition'>
//           <input type='checkbox' required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         {currState === "Login" ? (
//           <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//         ) : (
//           <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default AdminLoginPopUp;


///0000000000000000000000000000000000000000000000

// import React, {Component,useState} from 'react';

// export default function SignUp(){


//     const[fname,setFname] = useState("");
//     const [lname,setLname] =useState("");
//     const [email,setEmail] = useState("");
//     const[password,setPassword] =useState("");
//     const [userType,setUserType] = useState("");

//     const handleSubmu=it = (e) =>{
//      if(userType=="Admin" && secretKey !="Adarsh"){
//         e.preventDefault();
//           alert("Invalid Admin")
//      }else{

//         e.preventDefault();

//         console.log(fname, lname, email, password);
//         fetch("http://localhost:3000/api/v1/admin/add", {

//             method: "POST",
//             crossDomain: true,
//             headers:{
//                 "Content-Type" : "application/json",
//                 Accept : "application/json",
//                 "Access-Control-Allow-Origin": "",
//             },

//             body: JSON.stringify({
//                 fname,
//                 email,
//                 lname,
//                 password,
//                 userType
//             }),
//         })

//         .then((res)=> res.json())
//         .then((data)=>{
//             console.log(data,"useRegister");
//             if(data.status == "ok"){
//                 alert("Admin SignUp successfull");
//             }else{
//                 alert("Something went wrong");
//             }



//      }

//     )
      

//         console.log(fname, lname, email, password);
//         fetch("http://localhost:3000/api/v1/admin/add", {

//             method: "POST",
//             crossDomain: true,
//             headers:{
//                 "Content-Type" : "application/json",
//                 Accept : "application/json",
//                 "Access-Control-Allow-Origin": "",
//             },

//             body: JSON.stringify({
//                 fname,
//                 email,
//                 lname,
//                 password
//             }),
//         })

//         .then((res)=> res.json())
//         .then((data)=>{
//             console.log(data,"useRegister");
//             if(data.status == "ok"){
//                 alert("Admin SignUp successfull");
//             }else{
//                 alert("Something went wrong");
//             }
//         });
//     };


//     return(

// <form onSubmit = {handleSubmit}>
//   <h3>Sign Up</h3>


// <div>

//     <input 
//     type="radio"
//     name="UserType"
//     value="User"
//     onChange={(e)=>setFname(e.target.value)}
//     />
//      User
    
//     <input type="radio"
//     name="UserType"
//     value="Admin"
//     onChange={(e)=>setFname(e.target.value)}
//     />
//     Admin

// </div>

// {userType == "Admin" ? (
//     <div className='mb-3'>
//         <label>Secret Key</label>
//         <input 
//          type="text"
//          className='form-control'
//          placeholder='Secret key'
//          onChange={(e)=>setSecretKey(e.target.value)}
//         />

//     </div>
// ): null}


// <div className='mb-3'>
//     <label>First name</label>
//     <input 
//     type="text"
//     className='form-control'
//     placeholder='First Name'
//     onChange={(e)=> setFname(e.target.value)}
    
//     />

// </div>


//   <div className='mb-3'>
//     <label>First Name</label>
//     <input
//     type="text"
//     className='form-control'
//     placeholder='First Name'
//     onChange={(e)=> setFname(e.target.value)}>
    
//     </input>

//   </div>

// <div className='mb-3'>
// <label>Last Name</label>
// <input
//     type="text"
//     className='form-control'
//     placeholder='First Name'
//     onChange={(e)=> setFname(e.target.value)}>
    
//     </input>

// </div>


// </form>


//     )
// }

// }



// import React, { Component, useState } from "react";
// //import "../App.css";
// import { Navigate } from "react-router-dom";
// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log(email, password);
//     fetch("http://localhost:5000/login-user", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userRegister");
//         if (data.status == "ok") {
//           console.log(data.userType);
//           alert("login successful");
//           window.localStorage.setItem("token", data.data);
//           window.localStorage.setItem("userType", data.userType);
//           window.localStorage.setItem("loggedIn", true);
          
//           if (data.userType == "Admin") {
            
//             return (window.location.href = "./admin-dashboard");
//           } else {
//             window.location.href = "./userDetails";
//           }
//         }
//       });
//   }

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Login</h3>

//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="customCheck1"
//               />
//               <label className="custom-control-label" htmlFor="customCheck1">
//                 Remember me
//               </label>
//             </div>
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             <a href="/register">Register</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Card, CardContent, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { axiosInstance } from "../../config/axiosinstance";

const AdminSignup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/admin/add", formData);
      toast.success("Signup Successful!");
      navigate("/add");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card sx={{ maxWidth: 400, padding: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
            Admin Signup
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={formData.password}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Role"
              type="role"
              variant="outlined"
              name="role"
              value={formData.role}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
             <TextField
              fullWidth
              label="Phone"
              type="phone"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <Button type="submit" fullWidth sx={{ backgroundColor: "#9370DB", color: "white", fontWeight: "bold", "&:hover": { backgroundColor: "#7A5DBE" } }}>
              Sign Up
            </Button>
          </form>
          <Toaster />
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminSignup;
