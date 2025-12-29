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

const ControlPanel = () => {
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
      </StepsProvider>
    </div>
  );
};

export default ControlPanel;
