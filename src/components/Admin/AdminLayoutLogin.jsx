import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import Navbar from '../Navbar_1/Navbar';
import { UserHeader } from '../User/UserHeader';
import PrimarySearchAppBar from './AdminHeader.jsx';
import Navbar from './Navbar';
import AdminSignIn from "../../components/Admin/AdminLogin";
import AdminAuth from '../../components/Admin/AdminLogin';
import AdminSignup from '../../components/Admin/Adminn';
import RestaurantHeader from '../../components/Restaurants/RestaurantHeader';
import AdminHeadernavbar from '../../components/Admin/Admin_Header';
//import AdminLoginPopUp from '../../components/Admin/Adminn';
// import AdminSignUp from "../../components/Admin/AdminSignUp";
import Add from '../../pages/Admin/Add.js';
import List from '../../pages/Admin/List.js';



const AdminLayout = ({ setShowLogin }) => {

//    const isUserAuth = false;

    return (
        <>
   
    
       
        
            {/* <Navbar /> */}
             <AdminHeadernavbar />
             
    

            
           
            <div className ="min-h-96">
              
            <Add />
            <List />
           

            </div>
           
            {/* <Footer /> */}
        </>
    );
};

export default AdminLayout;