import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import Navbar from '../Navbar_1/Navbar';
import { UserHeader } from '../User/UserHeader';
import PrimarySearchAppBar from './AdminHeader';
import Navbar from './Navbar';
import AdminSignIn from "../../components/Admin/AdminLogin";
import AdminAuth from '../../components/Admin/AdminLogin';
import AdminSignup from '../../components/Admin/Adminn';
import RestaurantHeader from '../../components/Restaurants/RestaurantHeader';
import AdminHeadernavbar from '../../components/Admin/Admin_Header';
//import AdminLoginPopUp from '../../components/Admin/Adminn';
// import AdminSignUp from "../../components/Admin/AdminSignUp";

const AdminLayout = ({ setShowLogin }) => {

//    const isUserAuth = false;

// const url = "http://localhost:3000"
const url = `${import.meta.env.VITE_BASE_URL}`

    return (
        <>
   
    
       
        
           
            {/* <Navbar /> */}
            <AdminHeadernavbar />


    

            
           
                    <div className ="min-h-96"> 
  
                { /* <Outlet />  */}
                {/* <AdminSignIn /> */} 
                      <AdminSignup />
                {/* <AdminLoginPopUp /> */}
                 <AdminAuth />



                   </div>
           
            {/* <Footer /> */}
        </>
    );
};

export default AdminLayout;