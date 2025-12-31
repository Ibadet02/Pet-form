import Yup from "yup";
import { HealthInfo, OwnerInfo, PetInfo } from "../types/form";

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

export const petInfoSchema: Yup.ObjectSchema<PetInfo> = Yup.object({
  petName: Yup.string().required(),
  petType: Yup.string().required(),
  breed: Yup.string().required(),
  gender: Yup.string().required(),
  dateOfBirth: Yup.string().required(),
  weight: Yup.number().required(),
  isAdopted: Yup.boolean().oneOf([true, false]).required(),
  adoptionCenterName: Yup.string().required(),
  adoptionDate: Yup.string().required(),
});

export const healthInfoSchema: Yup.ObjectSchema<HealthInfo> = Yup.object({
  isVaccinated: Yup.boolean().oneOf([true, false]),
  vaccinations: Yup.string().required(),
  hasAllergies: Yup.boolean().oneOf([true, false]),
  allergyDetails: Yup.string().required(),
  isNeutered: Yup.boolean().oneOf([true, false]),
  lastVetVisit: Yup.string().required(),
  hasChronicIllness: Yup.boolean().oneOf([true, false]),
  chronicIllnessDetails: Yup.string().required(),
});
