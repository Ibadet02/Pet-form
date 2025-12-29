import { FieldConfig, HealthInfo, OwnerInfo, PetInfo } from "../types/form";

export const INITIAL_OWNER_INFO_VALUES = {
  ownerFirstName: "",
  ownerLastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  acceptTerms: true,
};

export const INITIAL_PET_INFO_VALUES = {
  petName: "",
  petType: "",
  breed: "",
  gender: "",
  dateOfBirth: "",
  weight: 0,
  isAdopted: false,
  adoptionCenterName: "",
  adoptionDate: "",
};

export const INITIAL_HEALTH_INFO_VALUES = {
  isVaccinated: true,
  vaccinations: "",
  hasAllergies: false,
  allergyDetails: "",
  isNeutered: true,
  lastVetVisit: "",
  hasChronicIllness: false,
  chronicIllnessDetails: "",
};

export const OWNER_INFO_FIELDS: FieldConfig<OwnerInfo>[] = [
  {
    id: 1,
    name: "ownerFirstName",
    type: "text",
    label: "Owner First Name",
  },
  {
    id: 2,
    name: "ownerLastName",
    type: "text",
    label: "Owner Last Name",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    label: "Email",
  },
  {
    id: 4,
    name: "phone",
    label: "Phone",
    type: "text",
  },
  {
    id: 5,
    name: "address",
    type: "text",
    label: "Address",
  },
  {
    id: 6,
    name: "city",
    type: "text",
    label: "City",
  },
  {
    id: 7,
    name: "country",
    type: "text",
    label: "Country",
  },
  {
    id: 8,
    name: "acceptTerms",
    type: "checkbox",
    label: "Accept Terms",
  },
] as const;

export const PET_INFO_FIELDS: FieldConfig<PetInfo>[] = [
  {
    id: 1,
    name: "petName",
    type: "text",
    label: "Pet Name",
  },
  {
    id: 2,
    name: "petType",
    type: "text",
    label: "Pet Type",
  },
  {
    id: 3,
    name: "breed",
    type: "text",
    label: "Breed",
  },
  {
    id: 4,
    name: "gender",
    type: "text",
    label: "Gender",
  },
  {
    id: 5,
    name: "dateOfBirth",
    type: "text",
    label: "Date of Birth",
  },
  {
    id: 6,
    name: "weight",
    type: "text",
    label: "Weight",
  },
  {
    id: 7,
    name: "isAdopted",
    type: "text",
    label: "Is Adopted",
  },
  {
    id: 8,
    name: "adoptionCenterName",
    type: "text",
    label: "Adoption Center Name",
  },
  {
    id: 9,
    name: "adoptionDate",
    type: "text",
    label: "Adoption Date",
  },
] as const;

export const HEALTH_INFO_FIELDS: FieldConfig<HealthInfo>[] = [
  {
    id: 1,
    name: "isVaccinated",
    type: "checkbox",
    label: "Is Vaccinated",
  },
  {
    id: 2,
    name: "vaccinations",
    type: "text",
    label: "Vaccinations",
  },
  {
    id: 3,
    name: "hasAllergies",
    type: "checkbox",
    label: "Has Allergies",
  },
  {
    id: 4,
    name: "allergyDetails",
    type: "text",
    label: "Allergy Details",
  },
  {
    id: 5,
    name: "isNeutered",
    type: "checkbox",
    label: "Is Neutered",
  },
  {
    id: 6,
    name: "lastVetVisit",
    type: "text",
    label: "Last Vet Visit",
  },
  {
    id: 7,
    name: "hasChronicIllness",
    type: "checkbox",
    label: "Has Chronic Illness",
  },
  {
    id: 8,
    name: "chronicIllnessDetails",
    type: "text",
    label: "Chronic Illness Details",
  },
] as const;
