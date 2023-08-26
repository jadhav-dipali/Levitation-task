import React, { useState } from "react";
import FirstStep from "./FirstForm";
import SecondStep from "./SecondForm";
import ThirdStep from "./ThirdForm";
import Process from "./Progress";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";


export default function Form1(){
  const navigate = useNavigate();
  const [success , setSuccess] = useState(false);

  const [page, setPage] = useState(0);

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    city:"",
    state:"",
    pincode:"",
    country:"",
    file: "",
    select:""
  });

  const token = localStorage.getItem("user-token");


  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  function submitfunc(){
    console.log(userInput.file);
    const formdata = new FormData();
     formdata.append("name" , userInput.name);
     formdata.append("email" , userInput.email);
     formdata.append("phoneNo" , userInput.phoneNo);
     formdata.append("address" , userInput.address);
     formdata.append("city" , userInput.city);
     formdata.append("pincode" , userInput.pincode);
     formdata.append("state" , userInput.state);
     formdata.append("country" , userInput.country);
     formdata.append("select" , userInput.select);
     formdata.append("file" , userInput.file);
     console.log(formdata);
  
    fetch("http://localhost:4000/userInfo",{
         method:"POST",
         headers:{
          "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4ZTE0MDE0NThkNmMyNGY3ZWViNTUiLCJpYXQiOjE2OTMwMjk5MzV9.QThjt_YW8q2skbWgggKTY2uGLEjuzpZeIdKKmLyh5Kw",
         },
         body:formdata
    }).then(res=>res.json())
    .then(res=>{
      if(res.message === "success"){
        toast.success("form submitted successfully");
        setSuccess(true)
        setTimeout(()=>navigate("/table"),3000)
      }
    });

  
  }
  
  const pageSubTitiles = [
    "1",
    "2",
    "3"
  ];

  const PageDisplay = () => {
    if (page === 0)
      return <FirstStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 1)
      return <SecondStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 2)
      return <ThirdStep nextStep={nextStep} handleChange={handleChange} />;
  };

  //handle field changes
  const handleChange = (input) => (e) => {
    if(input === "file"){
      setUserInput({...userInput , [input]:e.target.files[0]})
    }else{
      setUserInput({ ...userInput, [input]: e.target.value });
    }
   
  };

 
  return (<>
  { token&& <div className="userForm">
    <h3 style={{"textAlign":"center" , "color":"#664de5"}}>Fill the Submittion Form</h3>
       {success && <h1 style={{"textAlign":"center" , "color":"green"}}>Form Submitted Successfully</h1>}
      <div style={{ margin: "auto", width: "50%" }}>
        <Process step={page} />
      </div>

      <div className="userForm-container">
        <div className="userForm-container-header">
        </div>
        <div className="userForm-container-body">
        <form >
        {PageDisplay()}
        </form>
        </div>
        <div className="userForm-container-footer">

          <button className="btn-of-the-submittion"
            onClick={() => {
              if (page === pageSubTitiles.length - 1) {
                submitfunc();

              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === pageSubTitiles.length - 1
              ? "Submit"
              : "Next"}
          </button>
        </div>
      </div>
    
    </div>
  }</>
  );
};
