import React from "react";
import Button from "@mui/material/Button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useAppDispatch } from "../../../store/hooks";
import { Action } from "@reduxjs/toolkit";
import { useSteps } from "../../../context/StepsContext";

interface DirectionalButtonProps {
  direction: "left" | "right";
}

const DirectionalButton = ({ direction }: DirectionalButtonProps) => {
  const { moveToLeft, moveToRight } = useSteps();
  const isNext = direction === "right";
  const moveTo = isNext ? moveToRight : moveToLeft;
  return (
    <Button onClick={() => moveTo()}>
      {isNext ? <ArrowRight /> : <ArrowLeft />}
    </Button>
  );
};

export default DirectionalButton;
