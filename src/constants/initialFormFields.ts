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

export const { ownerInfoFields, petInfoFields, healthFields } =
  initialFormFields;
