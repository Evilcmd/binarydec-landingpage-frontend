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

  //state management stuffs
  const [formData,setFormData]=React.useState({
    name:'',
    email:'',
    feedback:'',
  });


  const handleSubmit=async(event)=>{
    // event.preventDefault();
    alert(formData);    
};

  const handleOnChange=(event)=>{
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
                "@media(min-width:992px)": {
                    width:"25%",
                },
                "@media(min-width:768px)":{
                    width:'75%',
                    marginBottom:'3rem',
                },
                "@media(min-width:576px)":{
                    width:'80%',
                    marginBottom:'3rem',
                },
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
                    />
                </div>
                </form>
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
        </div>

        <div
             style={
               { 
                border:'4px solid coral',
                borderColor:'primary.main',
                borderRadius:'1rem',
                background:'linear-gradient(#033363, #021F3B)',
                padding:'1.5rem',
                "@media(min-width:992px)": {
                    width:"25%",
                },
                "@media(min-width:768px)":{
                    width:'75%',
                    marginBottom:'3rem',
                },
                "@media(min-width:576px)":{
                    width:'80%',
                    marginBottom:'3rem',
                },
               
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

// export default function Pricing() {
//     return (
//         <Container
//             id="pricing"
//             sx={{
//                 pt: { xs: 4, sm: 12 },
//                 pb: { xs: 8, sm: 16 },
//                 position: 'relative',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 gap: { xs: 3, sm: 6 },
//             }}
//         >
//             <Box
//                 sx={{
//                     width: { sm: '100%', md: '60%' },
//                     textAlign: { sm: 'left', md: 'center' },
//                 }}
//             >
//                 <Typography component="h2" variant="h4" color="text.primary">
//                     Pricing
//                 </Typography>

//                 <Typography variant="body1" color="text.secondary">
//                     Quickly build an effective pricing table for your potential customers with
//                     this layout. <br />
//                     It&apos;s built with default Material UI components with little
//                     customization.
//                 </Typography>

//             </Box>

//             {/* <Grid container spacing={3} alignItems="center" justifyContent="center">
//                 {tiers.map((tier) => (
//                     <Grid
//                         item
//                         key={tier.title}
//                         xs={12}
//                         sm={tier.title === 'Enterprise' ? 12 : 6}
//                         md={4}
//                     >
//                         <Card
//                             sx={{
//                                 p: 2,
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 gap: 4,
//                                 border: tier.title === 'Professional' ? '1px solid' : undefined,
//                                 borderColor:
//                                     tier.title === 'Professional' ? 'primary.main' : undefined,
//                                 background:
//                                     tier.title === 'Professional'
//                                         ? 'linear-gradient(#033363, #021F3B)'
//                                         : undefined,
//                             }}
//                         >
//                             <CardContent>
//                                 <Box
//                                     sx={{
//                                         mb: 1,
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         alignItems: 'center',
//                                         color: tier.title === 'Professional' ? 'grey.100' : '',
//                                     }}
//                                 >
//                                     <Typography component="h3" variant="h6">
//                                         {tier.title}
//                                     </Typography>
//                                     {tier.title === 'Professional' && (
//                                         <Chip
//                                             icon={<AutoAwesomeIcon />}
//                                             label={tier.subheader}
//                                             size="small"
//                                             sx={{
//                                                 background: (theme) =>
//                                                     theme.palette.mode === 'light' ? '' : 'none',
//                                                 backgroundColor: 'primary.contrastText',
//                                                 '& .MuiChip-label': {
//                                                     color: 'primary.dark',
//                                                 },
//                                                 '& .MuiChip-icon': {
//                                                     color: 'primary.dark',
//                                                 },
//                                             }}
//                                         />
//                                     )}
//                                 </Box>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         alignItems: 'baseline',
//                                         color: tier.title === 'Professional' ? 'grey.50' : undefined,
//                                     }}
//                                 >
//                                     <Typography component="h3" variant="h2">
//                                         ${tier.price}
//                                     </Typography>
//                                     <Typography component="h3" variant="h6">
//                                         &nbsp; per month
//                                     </Typography>
//                                 </Box>
//                                 <Divider
//                                     sx={{
//                                         my: 2,
//                                         opacity: 0.2,
//                                         borderColor: 'grey.500',
//                                     }}
//                                 />
//                                 {tier.description.map((line) => (
//                                     <Box
//                                         key={line}
//                                         sx={{
//                                             py: 1,
//                                             display: 'flex',
//                                             gap: 1.5,
//                                             alignItems: 'center',
//                                         }}
//                                     >
//                                         <CheckCircleRoundedIcon
//                                             sx={{
//                                                 width: 20,
//                                                 color:
//                                                     tier.title === 'Professional'
//                                                         ? 'primary.light'
//                                                         : 'primary.main',
//                                             }}
//                                         />
//                                         <Typography
//                                             component="text"
//                                             variant="subtitle2"
//                                             sx={{
//                                                 color:
//                                                     tier.title === 'Professional' ? 'grey.200' : undefined,
//                                             }}
//                                         >
//                                             {line}
//                                         </Typography>
//                                     </Box>
//                                 ))}
//                             </CardContent>
//                             <CardActions>
//                                 <Button
//                                     fullWidth
//                                     variant={tier.buttonVariant}
//                                     component="a"
//                                     href="/material-ui/getting-started/templates/checkout/"
//                                     target="_blank"
//                                 >
//                                     {tier.buttonText}
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//              */}

//             <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
//                 <div>
//                     <Card
//                         sx={{
//                             p: 2,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             gap: 4,
//                             border:'1px solid',
//                             // border: tier.title === 'Professional' ? '1px solid' : undefined,
//                             borderColor:'primary.main',
//                                 // tier.title === 'Professional' ? 'primary.main' : undefined,
//                             background:'linear-gradient(#033363, #021F3B)'
//                                 // tier.title === 'Professional'
//                                 //     ? 'linear-gradient(#033363, #021F3B)'
//                                 //     : undefined,
//                         }}
//                     >
//                         <CardContent>
//                             <Box
//                                 sx={{
//                                     mb: 1,
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center',
//                                     color:'grey.100',
//                                     // color: tier.title === 'Professional' ? 'grey.100' : '',
//                                 }}
//                             >
//                                 <Typography component="h3" variant="h6" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
//                                     <p style={{fontSize:'2rem',fontWeight:'bold',fontFamily:'monospace'}}>Pre-Sign Up</p>

//                                     <div style={{margin:'10px'}}></div>

//                                     <Chip
//                                         icon={<AutoAwesomeIcon />}
//                                         label=""
//                                         size="small"
//                                         sx={{
//                                             background: (theme) =>
//                                                 theme.palette.mode === 'light' ? '' : 'none',
//                                             backgroundColor: 'primary.contrastText',
//                                             '& .MuiChip-label': {
//                                                 color: 'primary.dark',
//                                             },
//                                             '& .MuiChip-icon': {
//                                                 color: 'primary.dark',
//                                             },
//                                         }}
//                                     />
//                                 </Typography>

//                                 {/* {"Professional" === 'Professional' && (
//                                     <Chip
//                                         icon={<AutoAwesomeIcon />}
//                                         label=""
//                                         size="small"
//                                         sx={{
//                                             background: (theme) =>
//                                                 theme.palette.mode === 'light' ? '' : 'none',
//                                             backgroundColor: 'primary.contrastText',
//                                             '& .MuiChip-label': {
//                                                 color: 'primary.dark',
//                                             },
//                                             '& .MuiChip-icon': {
//                                                 color: 'primary.dark',
//                                             },
//                                         }}
//                                     />
//                                 )} */}
//                             </Box>

//                             <Container
//                                 sx={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     flexDirection:'column',
//                                     width:'100%',
//                                     color: 'Professional' === 'Professional' ? 'grey.50' : undefined,
//                                     // background:'red',
//                                 }}
//                             >

//                                     <div>
//                                     <form  noValidate autoComplete="off">
//                                         {/* <TextField id="standard-basic" label="Standard" />
//                                         <TextField id="filled-basic" label="Filled" variant="filled" />
//                                         <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
//                                         <Fields/>
//                                         <Fields/>

//                                         </form>
//                                     </div>

//                             </Container>
//                             <Divider
//                                 sx={{
//                                     my: 2,
//                                     opacity: 0.2,
//                                     borderColor: 'grey.500',
//                                 }}
//                             />
//                                 <Box
//                                     // key={line}
//                                     sx={{
//                                         py: 1,
//                                         display: 'flex',
//                                         gap: 1.5,
//                                         alignItems: 'center',
//                                     }}
//                                 >
//                                     <CheckCircleRoundedIcon
//                                         sx={{
//                                             width: 20,
//                                             color:
//                                                 'Professional' === 'Professional'
//                                                     ? 'primary.light'
//                                                     : 'primary.main',
//                                         }}
//                                     />
//                                     <Typography
//                                         component="text"
//                                         variant="subtitle2"
//                                         sx={{
//                                             color:'grey.200',
//                                                 // tier.title === 'Professional' ? 'grey.200' : undefined,
//                                         }}
//                                     >
//                                         {/* {line} */}
//                                     </Typography>
//                                 </Box>

//                         </CardContent>
//                         {/* <CardActions>
//                             <Button
//                                 fullWidth
//                                 variant={tier.buttonVariant}
//                                 component="a"
//                                 href="/material-ui/getting-started/templates/checkout/"
//                                 target="_blank"
//                             >
//                                 {tier.buttonText}
//                             </Button>
//                         </CardActions> */}
//                     </Card>
//                 </div>

//             </div>
//         </Container>
//     );
// }
