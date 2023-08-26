import React, { useState, useEffect } from "react";
import "./Header.css";
import ChipInput from "material-ui-chip-input";
import { RiPencilFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { Avatar } from "@material-ui/core";
import { BiLogOut } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { getPostsBySearch } from "../../Actions/posts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(
    localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : null
  );
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [tags, setTag] = useState([]);

  const userToken = localStorage.getItem("Token");


  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(
      localStorage.getItem("profile")
        ? JSON.parse(localStorage.getItem("profile"))
        : null
    );
  }, [location]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAdd = (tag) => setTag([...tags, tag]);

  const handleDelete = (tagToDelete) =>
    setTag(tags.filter((tag) => tag !== tagToDelete));

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate("/");
    }
  };

  const handleProfilePopupOpen = () => {
    setProfilePopupOpen(true);
  };

  const handleProfilePopupClose = () => {
    setProfilePopupOpen(false);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("Token", "");
    localStorage.setItem("profile", "");
    navigate("/");

  };

  const profilePopupContent = (
    <div className="profile-popup">
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
        <div className="header-search">
          <div className="search">
            <input
              type="text"
              placeholder="Search tales"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div>
            <ChipInput
              className="search-tags"
              placeholder="Search tags"
              style={{ margin: "10px 0", padding:"0 15px"}}
              value={tags}
              onAdd={(chip) => handleAdd(chip)}
              onDelete={(chip) => handleDelete(chip)}
            />
          </div>
          <BsSearch className="search-icon" onClick={searchPost} />
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
                  <Avatar className="profile-link"  onClick={handleProfilePopupOpen}> {user?.result.name.charAt(0)}</Avatar>
                  {/* <button>
                    <FaUserEdit onClick={handleProfilePopupOpen} />
                  </button> */}
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
