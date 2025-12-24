import { useAppDispatch, useAppSelector } from "./store/hooks";
import { next } from "./store/formProgress/formProgressSlice";
import "./styles.css";
import AppStyles from "./styles/App.module.css";
import OwnerInfoStep from "./components/form/steps/OwnerInfoStep";
import PetInfoStep from "./components/form/steps/PetInfoStep";
import HealthInfoStep from "./components/form/steps/HealthInfoStep";

export default function App() {
  return (
    <div className={AppStyles.myBtn}>
      <OwnerInfoStep />
      <PetInfoStep />
      <HealthInfoStep />
    </div>
  );
}
