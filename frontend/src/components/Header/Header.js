import React from "react";
import "./Header.css";
import { RiPencilFill } from 'react-icons/ri'
import { FaUserEdit } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { BsBookmarks } from 'react-icons/bs'
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <header class="site-header">
        <div className="container">
          <div className="site-identity">
            {/* <a href="#">
            <img src="https://i.pinimg.com/originals/bd/dc/7a/bddc7a3648d204bf082470d45112f0da.gif" alt="Site Name" />
          </a> */}
            <h1>
              <a href="#">MuseTales</a>
            </h1>
          </div>
          <nav className="site-navigation">
            <ul className="nav">
              <li>
                <a href="#"><BsSearch className="story"/> Search</a>
              </li>
              <li>
                <a href="#"> <BsBookmarks /> </a>
              </li>
              <li>
              <Link to='/auth'><RiPencilFill className="story" /> Add Story</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

{
  /* <Container maxwidth="lg">
  <AppBar position="static" color="inherit">
    <Typography variant="h2" align="centre">MuseTales</Typography>
    <img src='https://i.pinimg.com/originals/bd/dc/7a/bddc7a3648d204bf082470d45112f0da.gif' alt="museTales" height="60"/>
  </AppBar>

</Container> */
}
