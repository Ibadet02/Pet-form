import FormProgress from "./FormProgress";
import DirectionalButton from "../ui/buttons/DirectionalButton";
import OwnerInfoStep from "./steps/OwnerInfoStep";
import PetInfoStep from "./steps/PetInfoStep";
import HealthInfoStep from "./steps/HealthInfoStep";
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
import { HealthInfo, OwnerInfo, PetInfo } from "../../types/form";

const ControlPanel = () => {
  const formik = useFormik<OwnerInfo & PetInfo & HealthInfo>({
    initialValues: {
      ...INITIAL_OWNER_INFO_VALUES,
      ...INITIAL_PET_INFO_VALUES,
      ...INITIAL_HEALTH_INFO_VALUES,
    },
    onSubmit: (values) => {
      console.log("Form values submitted: ", values);
    },
  });
  const currentStep = useAppSelector(
    (state) => state.formProgress.currentProgress
  );
  const dispatch = useAppDispatch();

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
          <FormProgress />
          <Step stepKey="ownerInfo">
            <OwnerInfoStep />
          </Step>
          <Step stepKey="petInfo">
            <PetInfoStep />
          </Step>
          <Step stepKey="healthInfo">
            <HealthInfoStep />
          </Step>
          <DirectionalButton direction="left" />
          <DirectionalButton direction="right" />
        </form>
      </StepsProvider>
    </div>
  );
};

export default ControlPanel;
