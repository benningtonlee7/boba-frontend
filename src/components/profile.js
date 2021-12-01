import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const cookie = new Cookies();
  const email = cookie.get("email");
  const history = useNavigate();
  const [user, setUser] = useState({});

  const handleClick = () => {
    history.push({
      pathname: `/users/update`, // TO DO 
      state: user
    });
  };

  const {
    email,
    phone_number,
    first_name,
    last_name,
    state,
    city,
    address1,
    address2,
    zipcode
  } = user;

  const details = [
    {
      title: "First name",
      value: first_name
    },
    {
      title: "Last name",
      value: last_name
    },
    {
      title: "Email",
      value: email
    },
    {
      title: "Phone Number",
      value: phone_number
    },
    {
      title: "City",
      value: city + ", " + state
    },
    {
      title: "Address 1",
      value: address1 + ", " 
    },
    {
      title: "Address 2",
      value: address1 + ", " + address2 + ", " + zipcode
    }

  ];
  return (
    <div className="formContainer">
      <h4>User Profile</h4>
      <div className="detailsWrapper">
        {details.map(item => (
          <div className="detail" key={item.title}>
            <div className="detailTitle">{item.title}</div>
            <div className="detailValue">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button className="cancelButton" onClick={handleClick} data-testid="profile-edit">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Profile;