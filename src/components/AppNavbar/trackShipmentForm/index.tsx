import { Menu } from "@mui/material";
import React, { useState } from "react";
import { fetchShipmentDetails } from "../../../state/ShipmentDetails/shipmentDetailsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state/store";
import TrackingForm from "./trackingForm";
import FormTitle from "./formTitle";

interface Props {
  title: string;
  placeholder: string;
}

const TrackShipmentForm: React.FC<Props> = ({ title, placeholder }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [textFieldValue, setTextFieldValue] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextFieldValue(event.target.value);
  };

  const handleSearch = () => {
    if (textFieldValue === "") {
      return;
    }
    if (isNaN(Number(textFieldValue))) {
      window.alert("Please enter a valid shipment number");
      return;
    }
    dispatch(fetchShipmentDetails(textFieldValue));
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <FormTitle title={title} handleClick={handleClick} open={open} />
      <Menu
        sx={{
          boxShadow:
            "0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05)",
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <TrackingForm
          title={title}
          placeholder={placeholder}
          handleTextFieldChange={handleTextFieldChange}
          handleSearch={handleSearch}
        />
      </Menu>
    </>
  );
};

export default TrackShipmentForm;
