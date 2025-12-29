import { ChangeEvent, useState } from "react";
import {
  INITIAL_PET_INFO_VALUES,
  PET_INFO_FIELDS,
} from "../../../constants/initialFormFields";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
} from "@mui/material";

const PetInfoStep = () => {
  const [petInfoForm, setPetInfoForm] = useState(INITIAL_PET_INFO_VALUES);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked, type } = event.target;

    setPetInfoForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      {PET_INFO_FIELDS.map(({ id, name, label, type }) => (
        <FormControl key={id}>
          {type === "checkbox" ? (
            <FormControlLabel
              control={
                <Checkbox
                  name={name}
                  checked={Boolean(petInfoForm[name])}
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
                value={petInfoForm[name]}
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

export default PetInfoStep;
