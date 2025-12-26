export interface OwnerInfo {
  ownerFirstName: string;
  ownerLastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  acceptTerms?: boolean;
}

export interface PetInfo {
  petName: string;
  petType: string;
  breed: string;
  gender: string;
  dateOfBirth: string;
  weight: number;
  isAdopted: boolean;
  adoptionCenterName?: string;
  adoptionDate?: string;
}

export interface HealthInfo {
  isVaccinated: boolean;
  vaccinations?: string[];
  hasAllergies: boolean;
  allergyDetails?: string;
  isNeutered: boolean;
  lastVetVisit?: string;
  hasChronicIllness: boolean;
  chronicIllnessDetails?: string;
}

const initialFormFields: {
  ownerInfoFields: OwnerInfo;
  petInfoFields: PetInfo;
  healthFields: HealthInfo;
} = {
  ownerInfoFields: {
    ownerFirstName: "",
    ownerLastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  },
  petInfoFields: {
    petName: "",
    petType: "",
    breed: "",
    gender: "",
    dateOfBirth: "",
    weight: 0,
    isAdopted: false,
    adoptionCenterName: "",
    adoptionDate: "",
  },
  healthFields: {
    isVaccinated: true,
    vaccinations: [],
    hasAllergies: false,
    allergyDetails: "",
    isNeutered: false,
    lastVetVisit: "",
    hasChronicIllness: false,
    chronicIllnessDetails: "",
  },
};

type Field = "text" | "email" | "tel" | "textarea" | "checkbox" | "number";

export interface FieldConfig {
  label: string;
  name: string;
  type: Field;
  id: number;
}

export const OWNER_INFO_FIELDS: FieldConfig[] = [
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
    type: "text",
    label: "Accept Terms",
  },
] as const satisfies FieldConfig[];

export const PET_INFO_FIELDS: FieldConfig[] = [
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
];

export const HEALTH_INFO_FIELDS: FieldConfig[] = [
  {
    id: 1,
    name: "isVaccinated",
    type: "text",
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
    type: "text",
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
    type: "text",
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
    type: "text",
    label: "Has Chronic Illness",
  },
  {
    id: 8,
    name: "chronicIllnessDetails",
    type: "text",
    label: "Chronic Illness Details",
  },
];

type FieldValue<T extends FieldConfig> = T["type"] extends "number"
  ? number
  : T["type"] extends "checkbox"
  ? boolean
  : string;

export type OwnerInfoFormValues = {
  [F in (typeof OWNER_INFO_FIELDS)[number] as F["name"]]: FieldValue<F>;
};

// export type OwnerInfoFormValues = {
//   ownerFirstName: string;
//   ownerLastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   country: string;
//   acceptTerms: string;
// };

export const INITIAL_OWNER_INFO_VALUES = OWNER_INFO_FIELDS.reduce(
  (acc, field: FieldConfig) => {
    acc[field.name as keyof OwnerInfoFormValues] = "";
    return acc;
  },
  {} as OwnerInfoFormValues
);
