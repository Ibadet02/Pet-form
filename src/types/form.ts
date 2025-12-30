import { FormikProps } from "formik";
import {
  INITIAL_HEALTH_INFO_VALUES,
  INITIAL_OWNER_INFO_VALUES,
  INITIAL_PET_INFO_VALUES,
} from "../constants/initialFormFields";
import { MakeOptional } from "./util";

export type OwnerInfo = MakeOptional<
  typeof INITIAL_OWNER_INFO_VALUES,
  "acceptTerms"
>;

export type PetInfo = typeof INITIAL_PET_INFO_VALUES;

export type HealthInfo = MakeOptional<
  typeof INITIAL_HEALTH_INFO_VALUES,
  | "allergyDetails"
  | "hasAllergies"
  | "hasChronicIllness"
  | "isNeutered"
  | "isVaccinated"
>;

type FieldName<T> = keyof T;

type FieldType = "text" | "email" | "tel" | "textarea" | "checkbox" | "number";

export interface FieldConfig<T> {
  label: string;
  name: FieldName<T>;
  type: FieldType;
  id: number;
}

export type FormikValues = OwnerInfo & PetInfo & HealthInfo;
