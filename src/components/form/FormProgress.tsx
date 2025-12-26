import React from "react";
import { numberOfSteps } from "../../constants/stepOrders";
import StepOrders from "../../constants/stepOrders";
import { Button } from "@mui/material";
import { useSteps } from "../../context/StepsContext";
const numberedStepKeys = Object.keys(StepOrders);
const FormProgress = () => {
  const { goToStep } = useSteps();
  return (
    <div>
      {numberedStepKeys.map((stepKey, i) => {
        const stepNumber = i + 1;
        return (
          <Button onClick={() => goToStep(stepNumber)} key={stepKey}>
            {stepNumber}
          </Button>
        );
      })}
    </div>
  );
};

export default FormProgress;
