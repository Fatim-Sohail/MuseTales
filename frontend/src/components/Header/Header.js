import React, { useState, useEffect } from "react";
import "./Header.css";
import { RiPencilFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
// import { Avatar } from "@material-ui/core";
import { BiLogOut } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
// import CreateBlog from "../../Pages/CreateBlog/CreateBlog";

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  // const user = true;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);
  console.log(user);

    const userToken = localStorage.getItem("Token");
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleProfilePopupOpen = () => {
    setProfilePopupOpen(true);
  };

  const handleProfilePopupClose = () => {
    setProfilePopupOpen(false);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("Token", "");
    // history.push("/");
    // setUser(null);
  };

  const profilePopupContent = (
    <div className="profile-popup">
      {/* Display user info and editable fields */}
      {/* Include an "Update" button to save changes */}
      <button className="logout-btn" onClick={logout}>
        {" "}
        <BiLogOut />
        Logout{" "}
      </button>
    </div>
  );

  return (
    <header>
      <div className="averager">
        <Link to="/" className="logo">
          <h5 className="logo">
            <strong>M</strong>USE <strong>T</strong>ALES
          </h5>
        </Link>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <BsSearch className="search-icon" />
        </div>
        <div className="header_options">
          {userToken ? (
            <div className="auth_options">
              <Link className="addStory-link" to="/createblog">
                {/* <CreateBlog currentId={currentId} setCurrentId={setCurrentId} /> */}
                <RiPencilFill /> Add Tale
              </Link>

              <Link to="/readList" className="readList-link">
                <BsBookmarks />
              </Link>
              <div className="header-profile-wrapper">
                <div className="sub-profile-wrap">
                  {/* <Avatar /> */}
                  <button>
                    <FaUserEdit onClick={handleProfilePopupOpen} />
                  </button>
                  {/* <Link className="profile-link" to="/profile"> */}
                  {/* <FaUserEdit onClick={handleProfilePopupOpen} /> */}
                  {/* </Link> */}
                  {profilePopupOpen && (
                    <div
                      className="profile-popup-overlay"
                      onClick={handleProfilePopupClose}
                    >
                      {profilePopupContent}
                    </div>
                  )}
                  {/* <button className="logout-btn">
                    <BiLogOut /> Logout
                  </button> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="noAuth_options">
              <Link className="login-link" to="/auth">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
