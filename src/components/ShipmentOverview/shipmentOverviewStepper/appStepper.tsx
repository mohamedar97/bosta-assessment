import styled from "@emotion/styled";
import Step from "@mui/material/Step";
import { StepIconProps } from "@mui/material/StepIcon";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import Check from "@mui/icons-material/Check";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AppStepperConnector from "./appStepperConnector";

interface Props {
  shipmentHoldReasons: string;
  color: string;
  value: number;
}

const AppStepper: React.FC<Props> = ({ shipmentHoldReasons, color, value }) => {
  const [t, i18n] = useTranslation();

  const steps = [
    t(`ShipmentOverview.ShipmentStatus.one`),
    t(`ShipmentOverview.ShipmentStatus.two`),
    t(`ShipmentOverview.ShipmentStatus.three`),
    t(`ShipmentOverview.ShipmentStatus.four`),
  ];

  const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundColor: color,
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundColor: color,
    }),
  }));
  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: <AddCircleIcon />,
      2: <AssignmentTurnedInIcon />,
      3: <LocalShippingIcon />,
      4: <HowToRegIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          icons[String(props.icon)]
        )}
      </ColorlibStepIconRoot>
    );
  }

  return (
    <Stepper
      alternativeLabel
      activeStep={value}
      connector={<AppStepperConnector color={color} />}
    >
      {steps.map((label) => {
        if (
          label === "Shipment Out For Delivery" ||
          label === "الشحنة خرجت للتسليم"
        ) {
          return (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography variant="h5">{label}</Typography>
                <Typography variant="subtitle1" color={color}>
                  {shipmentHoldReasons}
                </Typography>
              </StepLabel>
            </Step>
          );
        }
        return (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <Typography variant="h5">{label}</Typography>
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default AppStepper;
