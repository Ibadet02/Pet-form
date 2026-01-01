import Button from "@mui/material/Button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useSteps } from "../../../context/StepsContext";
import { FormikValues } from "../../../types/form";
import { FormikProps } from "formik";

interface DirectionalButtonProps {
  direction: "left" | "right";
  formik?: FormikProps<FormikValues>;
}

const DirectionalButton = ({ direction, formik }: DirectionalButtonProps) => {
  const { moveToLeft, moveToRight } = useSteps();
  const isNext = direction === "right";

  const handleNext = async () => {
    try {
      if (formik && isNext) {
        const errors = await formik.validateForm();

        console.log("errors: ", errors);

        const errorLength = Object.keys(errors).length;

        if (errorLength === 0) {
          moveToRight();
        } else {
          formik.setTouched(
            Object.keys(errors).reduce(
              (acc, key) => ({ ...acc, [key]: true }),
              {}
            )
          );
        }
      } else if (!isNext) {
        moveToLeft();
      }
    } catch (err) {
      console.log("Error while validating the form: ", err);
    }
  };
  return (
    <Button onClick={handleNext}>
      {isNext ? <ArrowRight /> : <ArrowLeft />}
    </Button>
  );
};

export default DirectionalButton;
