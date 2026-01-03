import FormProgress from "./FormProgress";
import DirectionalButton from "../ui/buttons/DirectionalButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  next,
  previous,
  navigate,
} from "../../store/formProgress/formProgressSlice";
import { StepsProvider } from "../../context/StepsContext";
import Step from "./steps/Step";
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";
import { useFormik } from "formik";
import {
  INITIAL_HEALTH_INFO_VALUES,
  INITIAL_OWNER_INFO_VALUES,
  INITIAL_PET_INFO_VALUES,
} from "../../constants/initialFormFields";
import { FormikValues } from "../../types/form";
import { validationSchemas } from "../../constants/validationSchemas";
import StepContent from "./steps/StepContent";

const ControlPanel = () => {
  const formSteps = useAppSelector((state) => state.formProgress);
  const currentStep = formSteps.findIndex((step) => step.currentStep);
  const dispatch = useAppDispatch();
  const formik = useFormik<FormikValues>({
    initialValues: {
      ...INITIAL_OWNER_INFO_VALUES,
      ...INITIAL_PET_INFO_VALUES,
      ...INITIAL_HEALTH_INFO_VALUES,
    },
    validationSchema: validationSchemas[currentStep],
    onSubmit: (values) => {
      console.log("Form values submitted: ", values);
    },
  });

  function dispatchActionWithoutPayload<P>(
    action: ActionCreatorWithoutPayload
  ) {
    return () => {
      dispatch(action());
    };
  }

  function dispatchActionWithPayload<P>(action: ActionCreatorWithPayload<P>) {
    return (payload: P) => {
      dispatch(action(payload));
    };
  }

  return (
    <div>
      <StepsProvider
        currentStep={currentStep}
        moveToLeft={dispatchActionWithoutPayload(previous)}
        moveToRight={dispatchActionWithoutPayload(next)}
        goToStep={dispatchActionWithPayload(navigate)}
      >
        <form onSubmit={formik.handleSubmit}>
          <FormProgress formik={formik} />
          {formSteps.map((step, index) => (
            <Step key={index} isCurrentStep={step.currentStep}>
              <StepContent formik={formik} />
            </Step>
          ))}
          <DirectionalButton direction="left" />
          <DirectionalButton direction="right" formik={formik} />
        </form>
      </StepsProvider>
    </div>
  );
};

export default ControlPanel;
