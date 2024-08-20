import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TextField from "@mui/icons-material/TextFieldsOutlined";
import { blue } from "@mui/material/colors";


export default function Pricing() {
  const formStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
    "@media(min-width:768px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
  };

  const textFieldStyle = {
    display: "block",
    fontSize: "1.25rem",
    fontWeight: "500",
    color: "white",
    fontFamily:"monospace",
  };

  const nameFieldStyle = {
    marginTop: "0.25rem",
    display: "block",
    width: "100%",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    boxShadow: "0 0 0 1px rgba(0,0,0,0.05)",
    outline: "none",
    "&:focus": {
      ringColor: "#6777ef",
      borderColor: "#6777ef",
    },
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
  };
  const divlabelTextStyle = {
    padding: "1rem",
  };

  const emailFieldStyle = {
    marginTop: "0.25rem",
    display: "block",
    width: "100%",
    border: "1px solid  #d9d9d9",
    borderRadius: "0.375rem",
    boxShadow: "0 0 0 0.125rem rgba(0, 0, 0, 0.05)",
    outline: "none",
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 0.25rem rgba(102, 119, 238, 0.5)",
      borderColor: "#6677ef",
    },
    fontSize: "0.875rem",
    padding: "0.5rem 0.75rem",
  };

  const feedbackFieldStyle = {
    display: "block",
    width: "100%",
    border: "1px solid #d9d9d9",
    borderRadius: "0.375rem",
    boxShadow: "0 0 0 0.125rem rgba(0, 0, 0, 0.05)",
    outline: "none",
    fontSize: "0.875rem",
    padding: "0.5rem 0.75rem",
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 0.25rem rgba(102, 119, 238, 0.5)",
      borderColor: "#6677ef",
    },
    " @media (min-width: 640px": {
      fontSize: "0.875rem",
    },
  };

  const preSignUpBtnStyle = {
    padding: "1rem",
    border: "none",
    fontSize: "0.875rem",
    fontWeight: "500",
    borderRadius: "1rem",
    boxShadow: "0 0 0 0.125rem rgba(0, 0, 0, 0.05)",
    color: "black",
    backgroundColor: "#f0ad4e",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 0.25rem rgba(102, 119, 238, 0.5)",
    },
  };


  const PRE_SIGNUP_URL = 'http://localhost:8080/presignup'

  //state management stuffs
  const [formData,setFormData]=React.useState({
    name:'',
    email:'',
    feedback:'',
  });


  const handleSubmit=async(event)=>{
    event.preventDefault();
    
    const nameSubmit = formData['name'];
    const emailSubmit = formData['email'];
    const feedbackSubmit = formData['feedback'];

    setFormData({
      name:'',
      email:'',
      feedback:'',
    })

    try{
      const response = await fetch(PRE_SIGNUP_URL,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(
          {
            "name":nameSubmit,
            "email":emailSubmit,
            "company":feedbackSubmit.length==0 ? '' : feedbackSubmit
          })
      });


      if(!response.ok){
        
        alert(`User-${nameSubmit} already exists!`);
        return;

      }

      const data = response.json()
      data
      .then(
        (value)=>{alert("Pre-signed successfully !");
          console.log(value);}
      )
      .catch(
        (error)=>alert(error)
      );


    }catch(error){
      alert(error)

    }finally{

      //empty the fields when the entry is done
      setFormData({name:'',email:'',feedback:'',errors:{}});
    }

};

  const handleOnChange=(event)=>{
    console.log(`target->${event.target.value}`);
    console.log(`name->${event.target.name}`);

    setFormData({
        ...formData,
        [event.target.name]:event.target.value,
    });
  };

  return (
    <div id="pricing">

     <div
        style={{
            fontSize:'3.5rem',
            textAlign:'center',
            fontFamily:'monospace',
            marginTop:'3rem',
            textDecoration:'underline',
            color:'coral'
        }}
     >Early Sign-Up</div>
     
      <div style={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:'2rem',
        
      }}>

        <div
            style={
               { 
                border:'4px solid coral',
                borderColor:'primary.main',
                borderRadius:'1rem',
                background:'linear-gradient(#033363, #021F3B)',
                padding:'1.5rem',
                // width:'85%',
                marginBottom:'3rem',

                // width:'85%',
                "@media(min-width:992px)": {
                    width:"85%",
                },
                // "@media(min-width:768px)":{
                   
                //     marginBottom:'3rem',
                // },
                // "@media(min-width:576px)":{
                //     width:'30%',
                //     marginBottom:'3rem',
                // },
               }}
        >
            <div>
                <p
                style={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontFamily: "monospace",
                    display:'flex',
                flexWrap:'wrap',
                }}
                >
                
                Pre-SignUp Form
                </p>
            </div>

            <div>
                <form 
                onSubmit={handleSubmit}

                style={formStyle}>
                              {/* name field  */}
                              <div style={divlabelTextStyle}>
                                  <label htmlFor="name" style={textFieldStyle}>
                                  Name
                                  </label>
                                  <input
                                  type="text"
                                  id="name"
                                  placeholder="David Bechkam"
                                  min={3}
                                  value={formData.name}
                                  onChange={handleOnChange}
                                  maxLength={100}
                                  required
                                  name="name"
                                  style={nameFieldStyle}
                                  />
                              </div>

                              {/* email field  */}
                              <div style={divlabelTextStyle}>
                                  <label htmlFor="email" style={textFieldStyle}>
                                  Email
                                  </label>
                                  <input
                                  type="email"
                                  id="email"
                                  value={formData.email}
                                  onChange={handleOnChange}
                                  placeholder="David123@droppins.com"
                                  name="email"
                                  style={emailFieldStyle}
                                  required
                                  />
                              </div>

                              {/* feedback text  */}
                              <div style={divlabelTextStyle}>
                                  <label style={textFieldStyle}>Feedback</label>
                                      <textarea
                                          id="feedback"
                                          name="feedback"
                                          maxLength={256}
                                          placeholder="Feedback goes here..."
                                          rows={5}
                                          style={feedbackFieldStyle}
                                          value={formData.feedback}
                                          onChange={handleOnChange}
                                      />
                              </div>

                              <div 
                              style={{
                                  display:'flex',
                                  justifyContent:'center',
                                  alignItems:'center',
                              }}>
                                  <button style={preSignUpBtnStyle} type="submit">
                                      Pre-Sign
                                  </button>
                              </div>
                </form>
            </div>

                
        </div>

        <div
             style={
               { 
                border:'4px solid coral',
                borderColor:'primary.main',
                borderRadius:'1rem',
                background:'linear-gradient(#033363, #021F3B)',
                padding:'1.5rem',
                marginBottom:'3rem',

                // width:'85%',
                "@media(min-width:992px)": {
                    width:"85%",
                },
                // "@media(min-width:768px)":{
                //     width:'75%',
                //     marginBottom:'3rem',
                // },
                // "@media(min-width:576px)":{
                //     width:'80%',
                //     marginBottom:'3rem',
                // },
               
               }}
        >
          <div>
            <p
              style={{
                fontSize: "2.5rem",
                color: "white",
                fontFamily: "monospace",
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center',
              }}
            >
              
              Pre-Order Now
            </p>

          </div>

          <div style={
          {  display:"flex",
            justifyContent:"center",
            flexDirection:'column',
            alignItems:"center",
          }
            
          }>
              <div
              >

                <div style={{display:'flex',
                alignItems:'baseline',
               }}>
                <p style={{color:'white',marginRight:'0.3rem',fontSize:'2.5rem',textDecoration:'line-through',
                    textDecorationThickness:'2px',textDecorationColor:'red',
                    textDecorationLine:'line-through',
                    textDecorationStyle:'solid',
                }}>$10</p>
                <p style={{color:'white',marginLeft:'0.3rem',fontSize:'1rem',fontFamily:'monospace',}}>per-test</p>
                </div>
                
              </div>
              <div
                style={{display:'flex',
                alignItems:'baseline',
                justifyContent:'center',
                border:'3px solid white',
                borderRadius:'24rem',
                marginBottom:'2.5rem',
                width:'13rem',
               }}>
              
              <p style={{color:'white',marginRight:'0.3rem',fontSize:'3.5rem',}}>$5</p>
              <p style={{color:'white',marginLeft:'0.3rem',fontSize:'1.25rem',}}>per-test</p>

              </div>
          </div>

          <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}>
            <button style={preSignUpBtnStyle} type="submit">
              Pre-Order
            </button>
          </div>
        </div>
      
      </div>
    </div>
  );
}

