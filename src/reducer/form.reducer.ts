import type { FormState } from "../Services/typescript/interface/Form.interface";
import type { FormActionType } from "../Services/typescript/type/form.type";

export const initialFormState: FormState = {
  currentStep: 1,
  formData: {
    personal: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
    address: {
      address: "",
      city: "",
      state: "",
      zip: "",
    },
  },
};

export const formReducer = (
  state: FormState,
  action: FormActionType
): FormState => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        formData: {
          ...state.formData,
          personal: {
            ...state.formData.personal,
            [action.payload.field]: action.payload.value,
          },
        },
      };

    case "UPDATE_ADDRESS_INFO":
      return {
        ...state,
        formData: {
          ...state.formData,
          address: {
            ...state.formData.address,
            [action.payload.field]: action.payload.value,
          },
        },
      };

    case "RESET_FORM":
      return initialFormState;

    default:
      return state;
  }
};