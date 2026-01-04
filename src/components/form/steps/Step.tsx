import { PropsWithChildren } from "react";

type StepProps = PropsWithChildren & {
  isCurrentStep: boolean;
};

const Step = ({ isCurrentStep, children }: StepProps) => {
  return <>{isCurrentStep && <div className="step">{children}</div>}</>;
};

export default Step;
