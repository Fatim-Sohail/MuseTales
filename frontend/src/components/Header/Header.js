import React from "react";
import "./Header.css";
import { RiPencilFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
// import { BiLogOut } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
// import CreateBlog from "../../Pages/CreateBlog/CreateBlog";

const Header = () => {
  const user = true;

  return (
    <header>
      <div className="averager">
        <Link to="/" className="logo">
          <h5 className="logo"><strong>M</strong>USE <strong>T</strong>ALES</h5>
        </Link>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <BsSearch className="search-icon" />
        </div>
        <div className="header_options">
          {user ? (
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
                  <Link className="profile-link" to="/profile">
                    <FaUserEdit />
                  </Link>
                  {/* <button className="logout-btn">
                    <BiLogOut /> Logout
                  </button> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="noAuth_options">
              <Link className="login-link" to="/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

