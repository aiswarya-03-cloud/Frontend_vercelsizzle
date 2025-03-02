// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProfileUpdate = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         address: ''
//     });
    
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         // Fetch current user data
//         axios.get('/api/user/profile')
//             .then(response => {
//                 setFormData(response.data);
//             })
//             .catch(error => console.error('Error fetching profile:', error));
//     }, []);

//     const handleChange = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
        
//         try {
//             const response = await axios.put('/api/user/profile', formData);
//             setMessage('Profile updated successfully!');
//         } catch (error) {
//             setMessage('Error updating profile. Please try again.');
//             console.error('Update Error:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Update Profile</h2>
//             {message && <p>{message}</p>}
//             <form onSubmit={handleSubmit}>
//                 <label>Name:</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required />

//                 <label>Email:</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required />

//                 <label>Phone:</label>
//                 <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" />

//                 <label>Address:</label>
//                 <textarea name="address" value={formData.address} onChange={handleChange} required />

//                 <button type="submit">Update Profile</button>
//             </form>
//         </div>
//     );
// };

// export default ProfileUpdate;


import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    // Fetch user data from backend (replace URL with actual API endpoint)
    // axios.get("http://localhost:3000/api/v1/user/profile/:userId")


    axios.get`${import.meta.env.VITE_BASE_URL}/api/v1/user/profile/:userId`
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data", error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.patch("http://localhost:3000/api/v1/user/update", formData);
      await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/v1/user/profile/:userId`,formData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile", error);
      alert("Failed to update profile. Try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-96">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full border-2 border-gray-500"
            src="https://randomuser.me/api/portraits/men/9.jpg"
            alt="Profile"
          />
          <h2 className="text-2xl font-semibold mt-4">Update Profile</h2>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 bg-gray-700 rounded border border-gray-600 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 bg-gray-700 rounded border border-gray-600 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 mt-1 bg-gray-700 rounded border border-gray-600 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 mt-1 bg-gray-700 rounded border border-gray-600 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
