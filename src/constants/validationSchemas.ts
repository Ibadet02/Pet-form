import Yup from "yup";
import { OwnerInfo } from "../types/form";

export const ownerInfoSchema: Yup.ObjectSchema<OwnerInfo> = Yup.object({
  ownerFirstName: Yup.string().required("First name is required"),
  ownerLastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required(),
  city: Yup.string().required(),
  country: Yup.string().required(),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms to proceed"
  ),
});
