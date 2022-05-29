import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";

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

const ModalBooking = ({
  modelOpen,
  handleModelClose,
  schedule,
  date,
  setBookingSucessAlert,
}) => {
  const { time, name } = schedule;

  const { user } = useAuth();

  const initialBookingInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const info = { ...bookingInfo };
    info[field] = value;
    setBookingInfo(info);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const appointMent = {
      ...bookingInfo,
      serviceName: name,
      time,
      date: date.toLocaleDateString(),
    };

    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointMent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSucessAlert(true);
          handleModelClose();
        }
      });
  };
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
            <Typography
              variant="h4"
              sx={{
                color: "#14C5BF",
                fontWeight: "bold",
                textAlign: "center",
                p: 2,
              }}
            >
              {name}
            </Typography>

            <TextField
              disabled
              sx={{ width: "100%", mb: 1 }}
              id="outlined-required"
              defaultValue={time}
            />

            <TextField
              sx={{ width: "100%", mb: 1 }}
              id="outlined-size-normal"
              name="patientName"
              onBlur={handleOnBlur}
              placeholder={user.displayName}
            />

            <TextField
              disabled
              sx={{ width: "100%", mb: 1 }}
              id="outlined-size-normal"
              name="email"
              onBlur={handleOnBlur}
              placeholder={user.email}
            />

            <TextField
              sx={{ width: "100%", mb: 1 }}
              id="outlined-size-normal"
              type="number"
              name="phone"
              onBlur={handleOnBlur}
              placeholder="Phone Number"
            />

            <TextField
              disabled
              sx={{ width: "100%", mb: 1 }}
              id="outlined-size-normal"
              defaultValue={date.toDateString()}
            />

            <Button
              type="submit"
              sx={{ px: 6, backgroundColor: "#14C5BF", float: "right" }}
              variant="contained"
            >
              send
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBooking;
