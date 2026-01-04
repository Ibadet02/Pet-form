import React from "react";
import { numberOfSteps } from "../../constants/stepOrders";
import StepOrders from "../../constants/stepOrders";
import { Button } from "@mui/material";
import { useSteps } from "../../context/StepsContext";
import isFormValid from "../../utils/isFormValid";
import { FormikProps } from "formik";
import { FormikValues } from "../../types/form";
const numberedStepKeys = Object.keys(StepOrders);

interface FormProgressProps {
  formik: FormikProps<FormikValues>;
}

const FormProgress = ({ formik }: FormProgressProps) => {
  const { goToStep, currentStep } = useSteps();
  const handleNavigation = async (step: number) => {
    if (step <= currentStep) {
      goToStep(step);
    } else {
      const isValid = await isFormValid(formik);
      if (isValid) {
        goToStep(step);
      }
    }
  };
  return (
    <div>
      {numberedStepKeys.map((stepKey, i) => {
        const stepNumber = i + 1;
        return (
          <Button onClick={() => handleNavigation(i)} key={stepKey}>
            {stepNumber}
          </Button>
        );
      })}
    </div>
  );
};

export default FormProgress;
