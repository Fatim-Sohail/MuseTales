import React, { useState } from "react";
import { BiLogOut, BiSave } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../Actions/auth";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = localStorage.getItem("Token");
  const [user, setUser] = useState(
    localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : null
  );

  const [updatedUser, setUpdatedUser] = useState({
    name: user?.result.name || "",
    email: user?.result.email || "",
    interests: user?.result.interests || "",
    education: user?.result.education || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const saveProfile = () => {
    dispatch(updateProfile(updatedUser));
    console.log("Updated user profile:", updatedUser);
    navigate("/posts");
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("Token", "");
    localStorage.setItem("profile", "");
    navigate("/posts");
  };
  return (
    <div className="profile-popup">
      <div className="profile-nav">
        <h3 className="title">Edit Profile</h3>
        <div className="profile-input">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updatedUser.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="profile-input">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="profile-input">
          <label>Interests:</label>
          <input
            type="text"
            name="interests"
            value={updatedUser.interests}
            onChange={handleInputChange}
          />
        </div>
        <div className="profile-input">
          <label>Education:</label>
          <input
            type="text"
            name="education"
            value={updatedUser.education}
            onChange={handleInputChange}
          />
        </div>
        <div className="btns">
          <button className="profile-save-btn" onClick={saveProfile}>
            <BiSave /> Save
          </button>
          <button className="logout-btn" onClick={logout}>
            <BiLogOut /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
