import React, { useContext, useState, useEffect } from "react";
import "./profile.css";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BiNews } from "react-icons/bi";
import { AiOutlineHome, AiFillBell } from "react-icons/ai";
import { BsPlus, BsMessenger } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineArrowDropDownCircle, MdOndemandVideo } from "react-icons/md";
import avatar from "../../images/avatar.jpg";
import pic from "../../images/pic2.jpg";
import { Button, Tab, Tabs } from "@mui/material";
import { WidthChange } from "../sidebar/Sidebar";

const ProfileHeader = (props) => {
  const newwidth = useContext(WidthChange);
  let arraydata = [0, 10, 123];

  useEffect(() => {
    props.handledata(arraydata);
  }, []);

  // console.log("props", props);
  console.log(newwidth);
  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          className="profile-header"
          style={{ width: newwidth ? "80vw" : "95vw" }}
        >
          <div className="search-container">
            <RiFacebookCircleFill className="icon" />
            <input
              type="text"
              placeholder=" search fb"
              value={props.searchValue}
              onChange={(e) => props.searchedValuePassed(e.target.value)}
            />
          </div>
          <div className="header-center">
            <div className="centered-icons">
              <AiOutlineHome />
            </div>
            <div className="centered-icons">
              <MdOndemandVideo />
            </div>{" "}
            <div className="centered-icons">
              <IoIosPeople />
            </div>{" "}
            <div className="centered-icons">
              <BiNews />
            </div>
          </div>

          <div className="right-container">
            <div className="profile-container">
              <img src={avatar} />
              <p></p>
            </div>
            <div className="right-icons">
              <div className="necessity">
                <BsPlus className="plus" />
              </div>
              <div className="necessity">
                <BsMessenger className="plus" />
              </div>
              <div className="necessity">
                <AiFillBell className="plus" />
              </div>
              <div className="necessity">
                <MdOutlineArrowDropDownCircle className="plus" />
              </div>
            </div>
          </div>
        </div>
        <div className="cover-photo">
          <div className="cover_img">
            <img src={pic} />
          </div>

          <div className="dp">
            <img src={avatar} />
          </div>
          <div className="user-name">
            <h4>Hubert</h4>
            <a>Add Bio</a>
          </div>
          <div className="link-section">
            <div className="tabs">
              <ul>
                <li>
                  <a>Posts</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Friends</a>
                </li>
                <li>
                  <a>Photos</a>
                </li>
                <li>
                  <a>Story Archeive</a>
                </li>
                <li>
                  <a>More</a>
                </li>
              </ul>
            </div>
            <div className="tab-buttons">
              <Button variant="contained">Add to story</Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#e5e6eb", color: "#141414" }}
              >
                Edit Profile
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#e5e6eb", color: "#141414" }}
              >
                ...
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
