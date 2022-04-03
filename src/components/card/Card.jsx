import React from "react";
import "./Card.css";
import {ReactComponent as EmailIcon} from "../svg/email.svg";
import {ReactComponent as PhoneIcon} from "../svg/phone.svg";
import {ReactComponent as LocationIcon} from "../svg/location.svg";

const Card = ({ user }) => {
  // console.log(user);

  const {
    email,
    location: { city, country },
    name: { title, first, last },
    picture :{large},
    phone,
    dob:{date,age}

  } = user;
  const newDate = date.split("T")[0];

  return (
    <div>
      <div className="container">
        <div className="photo">
          <img src={large} alt="" />
        </div>
        <div className="name">{`${title} ${first} ${last}`}
        </div>
        <div className="mailIcon">
          <EmailIcon/> 
        </div>
        <div className="mail">{email}</div>
        <div className="phoneIcon">
          <PhoneIcon/>
        </div>
        <div className="phone">{phone}</div>
        <div className="locationIcon">
          <LocationIcon/>
        </div>
        <div className="location">{`${city} - ${country}`}</div>
        <div className="age">Age : {age}</div>
        <div className="registerDate">Register Date : {newDate}</div>
      </div>
    </div>
  );
};

export default Card;
