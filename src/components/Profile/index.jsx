import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaUpload } from 'react-icons/fa';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    validateField('username', e.target.value);
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
    validateField('fullname', e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateField('email', e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      setAvatar(URL.createObjectURL(file));
    } else {
      setErrors({ ...errors, avatar: 'Please select a valid image file.' });
    }
  };

  const validateField = (field, value) => {
    let newErrors = { ...errors };
    switch (field) {
      case 'username':
        if (!value) {
          newErrors.username = 'Username is required';
        } else {
          delete newErrors.username;
        }
        break;
      case 'fullname':
        if (!value) {
          newErrors.fullname = 'Full name is required';
        } else {
          delete newErrors.fullname;
        }
        break;
      case 'email':
        if (!value) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = 'Invalid email format';
        } else {
          delete newErrors.email;
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSave = () => {
    validateField('username', username);
    validateField('fullname', fullname);
    validateField('email', email);
    if (Object.keys(errors).length === 0) {
      console.log('Profile saved!', { username, fullname, email, avatar });
    }
  };

  return (
    <div className="max-w-7xl mx-auto container flex flex-col md:flex-row justify-center items-start py-8 bg-gray-100 min-h-screen">
      <div className="  mb-8 md:mb-0">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Profile</h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" />
            </span>
            <input
              type="text"
              id="username"
              className={`pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
              value={username}
              onChange={handleUsernameChange}
              aria-label="Username"
            />
          </div>
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition duration-200 ${
              errors.fullname ? 'border-red-500' : 'border-gray-300'
            }`}
            value={fullname}
            onChange={handleFullnameChange}
            aria-label="Full Name"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="text-gray-400" />
            </span>
            <input
              type="email"
              id="email"
              className={`pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              value={email}
              onChange={handleEmailChange}
              aria-label="Email"
              list="email-suggestions"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Save
        </button>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className="w-48 h-48 mb-4 rounded-full overflow-hidden shadow-lg">
          {avatar ? (
            <img
              src={avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Default Avatar"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <label
          htmlFor="avatar-upload"
          className="cursor-pointer bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-200 flex items-center"
        >
          <FaUpload className="mr-2" />
          Choose Image
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          aria-label="Upload profile picture"
        />
        {errors.avatar && (
          <p className="text-red-500 text-sm mt-2">{errors.avatar}</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
