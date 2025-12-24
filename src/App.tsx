import { useAppDispatch, useAppSelector } from "./store/hooks";
import { next } from "./store/formProgress/formProgressSlice";
import "./styles.css";
import AppStyles from "./styles/App.module.css";

export default function App() {
  const x = useAppSelector((state) => state.formProgress.currentProgress);
  const dispatch = useAppDispatch();

  return (
    <div className={AppStyles.myBtn}>
      <h1>Value: {x}</h1>
      <button onClick={() => dispatch(next())}>Inc</button>
    </div>
  );
}
