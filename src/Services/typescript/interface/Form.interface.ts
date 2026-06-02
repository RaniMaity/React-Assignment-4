export interface Address {
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface PersonalInfo {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface FormData {
  personal: PersonalInfo;
  address: Address;
}

export interface FormState {
  currentStep: number;
  formData: FormData;
}