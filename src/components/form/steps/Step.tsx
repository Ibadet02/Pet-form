import React, { PropsWithChildren } from "react";
import { useSteps } from "../../../context/StepsContext";
import StepOrders from "../../../constants/stepOrders";

type StepProps<T> = PropsWithChildren & {
  stepKey: keyof typeof StepOrders;
};

const Step = <T,>({ stepKey, children }: StepProps<T>) => {
  const { currentStep } = useSteps();
  const stepOrder = StepOrders[stepKey];
  const isVisible = stepOrder === currentStep;

  return <>{isVisible && <div>{children}</div>}</>;
};

export default Step;
