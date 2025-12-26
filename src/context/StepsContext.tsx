import { Action, ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { PropsWithChildren, createContext, useContext } from "react";

interface StepsContextType {
  currentStep: number;
  moveToLeft: () => void;
  moveToRight: () => void;
  goToStep: (stepNumber: number) => void;
}

type StepsProviderProps = PropsWithChildren & StepsContextType;

const StepsContext = createContext<StepsContextType | undefined>(undefined);

export const StepsProvider = ({
  currentStep,
  moveToLeft,
  moveToRight,
  goToStep,
  children,
}: StepsProviderProps) => {
  return (
    <StepsContext.Provider
      value={{ currentStep, moveToLeft, moveToRight, goToStep }}
    >
      <form action="POST">{children}</form>
    </StepsContext.Provider>
  );
};

export const useSteps = () => {
  const context = useContext(StepsContext);

  if (!context) throw new Error("useSteps must be used inside StepsProvider");

  return context;
};
