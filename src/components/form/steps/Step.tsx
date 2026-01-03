import { PropsWithChildren } from "react";

type StepProps = PropsWithChildren & {
  isCurrentStep: boolean;
};

const Step = ({ isCurrentStep, children }: StepProps) => {
  return <>{isCurrentStep && <div>{children}</div>}</>;
};

export default Step;
