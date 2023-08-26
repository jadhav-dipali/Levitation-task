import React from "react";


export default function ThirdStep(props){
  return (
    <div className="form">
     <label>Select grade</label>
     <select style={{ "height": "35px"}}   onChange={props.handleChange("select")}>
        <option>Select Option</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
     </select>
    </div>
  );
};