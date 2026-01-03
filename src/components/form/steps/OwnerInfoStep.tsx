import { OWNER_INFO_FIELDS } from "../../../constants/initialFormFields";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField,
} from "@mui/material";
import { FormikProps } from "formik";
import { FormikValues } from "../../../types/form";

interface OwnerInfoStepProps {
  formik: FormikProps<FormikValues>;
}

const OwnerInfoStep = ({ formik }: OwnerInfoStepProps) => {
  const { values, handleChange, touched, errors } = formik;

  return (
    <div>
      {OWNER_INFO_FIELDS.map(({ id, name, label, type }) => {
        const hasError = Boolean(errors[name] && touched[name]);

        return (
          <FormControl key={id} error={hasError}>
            {type === "checkbox" ? (
              <>
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
                {hasError && <FormHelperText>{errors[name]}</FormHelperText>}
              </>
            ) : (
              <TextField
                id={name}
                name={name}
                type={type}
                value={values[name]}
                onChange={handleChange}
                error={hasError}
                helperText={hasError ? errors[name] : ""}
                label={label}
              />
            )}
          </FormControl>
        );
      })}
    </div>
  );
};

export default OwnerInfoStep;
