import { FormikValues } from "../types/form";
import { FormikProps } from "formik";

const isFormValid = async (formik?: FormikProps<FormikValues>) => {
  let isFormValid = false;

  try {
    if (formik) {
      const errors = await formik.validateForm();
      const errorsLength = Object.keys(errors).length;

      if (errorsLength) {
        formik.setTouched(
          Object.keys(errors).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            {}
          )
        );
        isFormValid = false;
      } else {
        isFormValid = true;
      }
    } else {
      isFormValid = true;
    }
  } catch (err) {
    console.log("Error while validating the form: ", err);
    isFormValid = false;
  }
  return isFormValid;
};

export default isFormValid;
