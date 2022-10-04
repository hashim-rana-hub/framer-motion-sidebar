import { padding } from "@mui/system";
import React, { useState } from "react";
import CitySelector from "react-city-selector";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import CommonButton from "../common/CommonButton";
import Fields from "../common/Fields";
import PasswordField from "../common/PasswordField";

const Analytics = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const handlechange = (e) => {
    setName(e.target.value)
  }

  const handlesubmission = () => {
    console.log("password ", password, "name ", name, "country", country, "region", region);
  }


  return (
    <div  style={{ width: "100%", height:"100vh" ,display:"flex",flexDirection:"column" ,justifyContent:"space-evenly",  }}>
      <Fields placeholder="Name" handlechange={ handlechange } value={name}/>
      <PasswordField placeholder="Password"   setValue={setPassword} password={password}/>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems:"center", padding:"20px"}}>
        <label className="laable">Country</label>
        <CountryDropdown className="inpClass" value={country} onChange={(val) => setCountry(val)} />
      </div>{" "}


      <div style={{ display: "flex", justifyContent: "center", gap: "20px" , padding:"20px", textAlign:"left", alignItems:"flex-start" }}>
        <label className="laable">Region</label>
        <RegionDropdown className="inpClass" country={country} value={region} onChange={(val) => setRegion(val)} />
      </div>{" "}

      <CommonButton text="Confirm" handlesubmission={handlesubmission}/>

     
    </div>
  );
};

export default Analytics;
