import Button from "@mui/material/Button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useSteps } from "../../../context/StepsContext";
import { FormikValues } from "../../../types/form";
import { FormikProps } from "formik";
import isFormValid from "../../../utils/isFormValid";

interface DirectionalButtonProps {
  direction: "left" | "right";
  formik?: FormikProps<FormikValues>;
}

const DirectionalButton = ({ direction, formik }: DirectionalButtonProps) => {
  const { moveToLeft, moveToRight } = useSteps();
  const isNext = direction === "right";

  const handleNext = async () => {
    const isValid = await isFormValid(formik);

    if (isNext && isValid) {
      moveToRight();
    } else if (!isNext) {
      moveToLeft();
    }
  };
  return (
    <Button onClick={handleNext}>
      {isNext ? <ArrowRight /> : <ArrowLeft />}
    </Button>
  );
};

export default DirectionalButton;
