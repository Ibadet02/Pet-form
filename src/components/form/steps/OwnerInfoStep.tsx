import React, { useState } from "react";
import {
  INITIAL_OWNER_INFO_VALUES,
  OWNER_INFO_FIELDS,
} from "../../../constants/initialFormFields";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";

const OwnerInfoStep = () => {
  const [ownerInfoForm, setOwnerInfoForm] = useState(INITIAL_OWNER_INFO_VALUES);

  return (
    <div>
      {OWNER_INFO_FIELDS.map(({ id, name, label, type }) => (
        <FormControl key={id}>
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Input
            id={name}
            aria-describedby="my-helper-text"
            name={name}
            type={type}
            value={ownerInfoForm[name]}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      ))}
    </div>
  );
};

export default OwnerInfoStep;
