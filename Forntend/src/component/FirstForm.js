import React from "react";

export default function FirstStep (props) {
  return (
    <div className="form">
      <label>Full Name</label>
      <input
        type="text"
        name="fullname"
        placeholder="Steve Jobs"
        onChange={props.handleChange("name")}
      />
       <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={props.handleChange("email")}
      />
      <label>PhoneNo</label>
      <input
        type="text"
        name="phoneNo"
        placeholder="Enter Phoneno"
        onChange={props.handleChange("phoneNo")}
      />
       <label>Address</label>
      <input
        type="text"
        name="address"
        placeholder="Enter Address"
        onChange={props.handleChange("address")}
      />
       <label>city</label>
      <input
        type="text"
        name="city"
        placeholder="city-name"
        onChange={props.handleChange("city")}
      />
       <label>State</label>
      <input
        type="text"
        name="state"
        placeholder="state"
        onChange={props.handleChange("state")}
      />
       <label>pincode</label>
      <input
        type="text"
        name="pincode"
        placeholder="pincode"
        onChange={props.handleChange("pincode")}
      />
       <label>Country</label>
      <input
        type="text"
        name="country"
        placeholder="country"
        onChange={props.handleChange("country")}
      />
    </div>
  );
};