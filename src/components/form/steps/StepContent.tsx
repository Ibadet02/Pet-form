import {
  OWNER_INFO_FIELDS,
  PET_INFO_FIELDS,
  HEALTH_INFO_FIELDS,
} from "../../../constants/initialFormFields";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField,
} from "@mui/material";
import { FormikProps } from "formik";
import { FormikValues } from "../../../types/form";
import { useSteps } from "../../../context/StepsContext";

interface StepContentProps {
  formik: FormikProps<FormikValues>;
}

const StepContent = ({ formik }: StepContentProps) => {
  const { currentStep } = useSteps();
  const { values, handleChange, touched, errors } = formik;

  const getFields = () => {
    if (currentStep === 0) {
      return OWNER_INFO_FIELDS;
    }

    if (currentStep === 1) {
      return PET_INFO_FIELDS;
    }

    return HEALTH_INFO_FIELDS;
  };

  return (
    <div>
      {getFields().map(({ id, name, label, type }) => {
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

export default StepContent;
