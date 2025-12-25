import { useAppDispatch, useAppSelector } from "./store/hooks";
import { next } from "./store/formProgress/formProgressSlice";
import "./styles.css";
import AppStyles from "./styles/App.module.css";
import ControlPanel from "./components/form/ControlPanel";

export default function App() {
  return (
    <div className={AppStyles.myBtn}>
      <ControlPanel />
    </div>
  );
}
