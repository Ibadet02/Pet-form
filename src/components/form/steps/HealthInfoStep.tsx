import { ChangeEvent, useState } from "react";
import {
  HEALTH_INFO_FIELDS,
  INITIAL_HEALTH_INFO_VALUES,
} from "../../../constants/initialFormFields";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
} from "@mui/material";

interface HealthInfoStepProps {}

const HealthInfoStep = () => {
  const [healthInfoForm, setHealthInfoForm] = useState(
    INITIAL_HEALTH_INFO_VALUES
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked, type } = event.target;

    setHealthInfoForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      {HEALTH_INFO_FIELDS.map(({ id, name, label, type }) => (
        <FormControl key={id}>
          {type === "checkbox" ? (
            <FormControlLabel
              control={
                <Checkbox
                  name={name}
                  checked={Boolean(healthInfoForm[name])}
                  onChange={handleChange}
                />
              }
              label={label}
            />
          ) : (
            <>
              <InputLabel htmlFor={name}>{label}</InputLabel>
              <Input
                type={type}
                value={healthInfoForm[name]}
                name={name}
                onChange={handleChange}
              />
            </>
          )}
        </FormControl>
      ))}
    </div>
  );
};

export default HealthInfoStep;
