import styled, { StyledComponent } from "@emotion/styled";
import StepConnector, {
  stepConnectorClasses,
  StepConnectorProps,
} from "@mui/material/StepConnector";
import { useTranslation } from "react-i18next";

interface Props {
  color: string;
}

const AppStepperConnector: React.FC<Props> = ({ color }) => {
  const [t, i18n] = useTranslation();
  const language = i18n.language === "ar" ? "ar" : "en";
  const leftValue =
    language === "ar" ? "calc(50% + 20px )" : "calc( -50% + 20px )";
  const rightValue =
    language === "ar" ? "calc( -50% + 20px )" : "calc(50% + 20px )";

  const StyledStepConnector = styled(StepConnector)(({}) => ({
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
      backgroundColor: "#eaeaf0",
      borderRadius: 1,
    },
  }));

  return <StyledStepConnector />;
};

export default AppStepperConnector;
