import React from "react";
import "../styles/Blog.css";
import { Link, NavLink } from "react-router-dom";


const NavBar = ({onPress}) => { 
  return (
    <div className="blog-post-navbar">
    <div className="blog-post-brand">
      <Link to="/">
        <img
          src="https://st2.depositphotos.com/18722762/46746/v/380/depositphotos_467469132-stock-illustration-our-planet-earth-illustration-green.jpg?forcejpeg=true"
          alt="itjuana logo"
          width={100}
          height={80}
        />
      </Link>
    
    </div>
<h1 className="planet"> THE PLANET </h1>
    <ul>
    <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="change">Climate Change</NavLink>
      </li>
      <li>
        <NavLink to="climate">Effects</NavLink>
      </li>
      <li>
        <Link to="create-new-post">
          Share tips
        </Link>
      </li>
    </ul>
  </div>
  );
}

export default NavBar