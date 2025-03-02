
import React, { useState, useEffect,useContext } from "react";
import { AppBar, Toolbar, IconButton, Avatar, Badge, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Box, Switch } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosinstance";
import { toast } from "react-toastify";
import axios from "axios"; // ✅ Import Axios for API calls
// import {useContext} from 'react';
// import {StoreContext} from '../../Context/StoreContext';

const AdminHeadernavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(0); // ✅ Store cart item count
  const navigate = useNavigate();

//   const {getTotalCartAmount, token, setToken} = useContext(StoreContext);

  // Fetch cart count when component loads
  useEffect(() => {
    fetchCartCount();
  }, []);

  const fetchCartCount = async () => {
    try {
      const response = await axios.get("/api/cart"); // ✅ Adjust API endpoint as needed
      const cartItems = response.data?.cart?.cartItems || [];
      const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
      setCartCount(totalItems);
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  // Profile menu handlers
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);


  const handleLogout = async () => {
    console.log("Logging out...");
    
      await  axiosInstance.post("/admin/logout");
      toast.success("Logged out successfully!");
      navigate("/");
  
  };


  
    // navigate("/"); // Redirect using navigate

    // If using cookies, call API to clear token
    // axios.get("http://localhost:3000/api/v1/user/logout", { withCredentials: true })
    //     .then(() => {
    //         console.log("User logged out successfully");
    //         navigate("/"); // Redirect user to home page
    //     })
    //     .catch((error) => {
    //         console.error("Logout Error:", error);
    //     });
  

  const handleUpdateProfile = () => {
    handleMenuClose();
    navigate("/update-profile"); // Navigate to Update Profile page
  };



  return (


    <AppBar position="static" sx={{ background: darkMode ? "#333" : "#000", padding: "10px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Left Section - Logo & Mobile Menu Icon */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} sx={{ display: { xs: "block", md: "none" } }}>
            <MenuIcon />
          </IconButton>
          <img src="/Sizzler_Bytes_latest.png" className="footimage" alt="Logo" style={{ height: "50px" }} />
        </Box>

        {/* Right Section - Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
       

          {/* Cart Icon with Dynamic Count */}
          <IconButton color="inherit" onClick={() => navigate("/cart")}>
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Profile Picture */}
          <IconButton onClick={handleMenuOpen}>
            <Avatar src="https://tse1.mm.bing.net/th?id=OIP.K77dPgrHemZZloIRXIJIeQHaLG&w=474&h=474&c=7" alt="Profile Pic" sx={{ width: 36, height: 36 }} />
          </IconButton>

          {/* Profile Dropdown Menu */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem >Update Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}; 

export default AdminHeadernavbar;

