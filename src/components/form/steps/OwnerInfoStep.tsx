import { OWNER_INFO_FIELDS } from "../../../constants/initialFormFields";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
} from "@mui/material";
import { FormikProps } from "formik";
import { FormikValues } from "../../../types/form";

interface OwnerInfoStepProps {
  formik: FormikProps<FormikValues>;
}

const OwnerInfoStep = ({ formik }: OwnerInfoStepProps) => {
  const { values, handleChange } = formik;
  return (
    <div>
      {OWNER_INFO_FIELDS.map(({ id, name, label, type }) => (
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
                id={name}
                name={name}
                type={type}
                value={values[name]}
                onChange={handleChange}
              />
            </>
          )}
        </FormControl>
      ))}
    </div>
  );
};

export default OwnerInfoStep;
