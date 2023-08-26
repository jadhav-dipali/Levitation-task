import React from "react";

export default function SecondStep(props){
  return (
    <div className="form">
      <label>Select Files</label>
      <input
        type="File"
       name="file"
        onChange={props.handleChange("file")}
        
      />

      
    </div>
  );
};