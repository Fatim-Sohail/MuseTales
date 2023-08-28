import React, { useState, useEffect } from "react";
import "./Header.css";
import ChipInput from "material-ui-chip-input";
import { RiPencilFill } from "react-icons/ri";
import { Avatar } from "@material-ui/core";
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
  const [search, setSearch] = useState("");
  const [tags, setTag] = useState([]);
  const query = useQuery();
  const searchQuery = query.get("searchQuery");

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
      console.log('Search result:', `${tags}`);
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      console.log('No posts found!');
      navigate("/");
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("Token", "");
    localStorage.setItem("profile", "");
    navigate("/");
  };

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
              style={{ margin: "10px 0", padding: "0 15px" }}
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
                <RiPencilFill /> Add Tale
              </Link>

              <Link to="/likedposts" className="readList-link">
                <BsBookmarks />
              </Link>
                <div className="sub-profile-wrap">
                  <Link to="/profile">
                    <Avatar className="profile-link">
                      {" "}
                      {user?.result.name.charAt(0)}
                    </Avatar>
                  </Link>
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
