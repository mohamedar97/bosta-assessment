import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import shipmentStatusTable from "../../utils/shipmentStatusHashTable";
import { Typography } from "@mui/material";

export default function ShipmentOverviewStepper() {
  const shipmentDetails = useSelector(
    (state: RootState) => state.shipmentDetails
  );
  let shipmentHoldReasons: string = "";

  const [t, i18n] = useTranslation();
  const language = i18n.language === "ar" ? "ar" : "en";

  let color =
    shipmentStatusTable(shipmentDetails.shipmentStatus).color ?? "#e30613";
  const value = shipmentStatusTable(shipmentDetails.shipmentStatus).value;
  shipmentDetails.shipmentEvents.forEach((event) => {
    if (event.reason && shipmentDetails.shipmentStatus != "DELIVERED") {
      switch (event.exceptionCode) {
        case "1":
          color = "#f9ba02";
          break;
        case "3":
          color = "#f9ba02";
          break;
        default:
          color = "#e30613";
      }
      shipmentHoldReasons = event.reason;
    }
  });

  const leftValue =
    language === "ar" ? "calc(50% + 20px )" : "calc( -50% + 20px )";
  const rightValue =
    language === "ar" ? "calc( -50% + 20px )" : "calc(50% + 20px )";

  const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
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

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
      left: leftValue,
      right: rightValue,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: color,
        direction: "rtl",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: color,
        direction: "rtl",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      direction: "rtl",

      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));
  const steps = [
    t(`ShipmentOverview.ShipmentStatus.one`),
    t(`ShipmentOverview.ShipmentStatus.two`),
    t(`ShipmentOverview.ShipmentStatus.three`),
    t(`ShipmentOverview.ShipmentStatus.four`),
  ];
  return (
    <Stack sx={{ width: "100%", paddingY: 15 }}>
      <Stepper
        alternativeLabel
        activeStep={value}
        connector={<ColorlibConnector />}
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
                  <Typography variant="h6" color={color}>
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
    </Stack>
  );
}
