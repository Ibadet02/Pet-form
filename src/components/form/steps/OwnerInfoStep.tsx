import { ChangeEvent, useState } from "react";
import {
  INITIAL_OWNER_INFO_VALUES,
  OWNER_INFO_FIELDS,
} from "../../../constants/initialFormFields";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
} from "@mui/material";

const OwnerInfoStep = () => {
  const [ownerInfoForm, setOwnerInfoForm] = useState(INITIAL_OWNER_INFO_VALUES);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked, type } = event.target;

    setOwnerInfoForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      {OWNER_INFO_FIELDS.map(({ id, name, label, type }) => (
        <FormControl key={id}>
          {type === "checkbox" ? (
            <FormControlLabel
              control={
                <Checkbox
                  name={name}
                  checked={Boolean(ownerInfoForm[name])}
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
                value={ownerInfoForm[name]}
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
