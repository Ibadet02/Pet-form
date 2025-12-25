import { PropsWithChildren } from "react";
type StepsProps = PropsWithChildren;

const Steps = ({ children }: StepsProps) => {
  return <div>{children}</div>;
};

export default Steps;
