import { HEALTH_INFO_FIELDS } from "../../../constants/initialFormFields";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
} from "@mui/material";
import { FormikProps } from "formik";
import { FormikValues } from "../../../types/form";

interface HealthInfoStepProps {
  formik: FormikProps<FormikValues>;
}

const HealthInfoStep = ({ formik }: HealthInfoStepProps) => {
  const { values, handleChange } = formik;

  return (
    <div>
      {HEALTH_INFO_FIELDS.map(({ id, name, label, type }) => (
        <FormControl key={id}>
          {type === "checkbox" ? (
            <FormControlLabel
              control={
                <Checkbox
                  name={name}
                  checked={Boolean(values[name])}
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
                value={values[name]}
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
