import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosinstance";
import { useParams } from "react-router-dom";
import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";

const ProfileCard = () => {

    const params = useParams();
    const {userId} = params;
    console.log("userId...",userId);

//   const userData = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "+1234567890",
//     address: "123 Main St, Springfield, USA"
//   };


const [profilepic,setprofilepic] = useState([])

const fetchProfilePic = async() =>{
    try{

    const response = await axiosInstance({
        method: "GET",
        url : '/user/profile/:userId'
    })

    console.log("ProfileResponse==",response)
    setprofilepic(response.data.data)

    }catch(error){
      console.log(error);
 
    }
};

useEffect(()=>{

    fetchProfilePic();
},[]);



return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      bgcolor="#121212"
    >
      <Card 
        sx={{
          width: 600, 
          p: 4, 
          borderRadius: 4, 
          boxShadow: 6, 
          bgcolor: "#1E1E1E", 
          color: "white",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar 
            src="https://randomuser.me/api/portraits/men/9.jpg" 
            sx={{ width: 120, height: 120, mb: 2, border: "4px solid #555" }}
          />
          <Typography variant="h4" fontWeight="bold">User Profile</Typography>
        </Box>

        <CardContent sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            <strong>👤 Name:</strong> {profilepic.name}
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            <strong>📧 Email:</strong> {profilepic.email}
          </Typography>
          <Typography variant="h5">
            <strong>📞 Phone:</strong> {profilepic.phone}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );

  
};

export default ProfileCard;
