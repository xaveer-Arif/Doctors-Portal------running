import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 40,
  p: 5,
};

const ModalBooking = ({ modelOpen, handleModelClose, schedule, date }) => {
    const {time, name} = schedule
const handleFormSubmit = e => {
  alert()
  e.preventDefault()
  handleModelClose()
}

  return (
    <div>
      <Modal
        open={modelOpen}
        onClose={handleModelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={handleFormSubmit}>
          
          <Typography variant="h4" sx ={{color:"#14C5BF", fontWeight:"bold", textAlign:"center", p:2}}>{name}</Typography>
          
            <TextField
             disabled
             sx ={{width:"100%", mb:1}}
             id="outlined-size-normal"
             defaultValue={time} />

            <TextField
             sx ={{width:"100%", mb:1}}
             id="outlined-size-normal"
             placeholder="Name" />

            <TextField
             sx ={{width:"100%", mb:1}}
             id="outlined-size-normal"
             placeholder="Email"/>
            
            <TextField
             sx ={{width:"100%", mb:1}}
             id="outlined-size-normal"
             placeholder="Phone Number" />

            <TextField
             disabled
             sx ={{width:"100%", mb:1}}
             id="outlined-size-normal"
             defaultValue= {date.toDateString()} />

            <Button 
              type = "submit" 
              sx ={{px:6, backgroundColor:"#14C5BF", float:"right"}}
              variant = "contained">
                send
            </Button>        
                   
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBooking;
