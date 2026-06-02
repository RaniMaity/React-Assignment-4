// export interface PersonalInfo {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
// }


// export interface AddressInfo {
//   address: string;
//   city: string;
//   state: string;
//   zipCode: string;
// }

// export interface FormData {
//   personalInfo: PersonalInfo;
//   addressInfo: AddressInfo;
// }

// export interface FormState {
//   currentStep: number;
//   formData: FormData;
// }

// export type FormAction =
//   | {
//       type: "NEXT_STEP";
//     }
//   | {
//       type: "PREVIOUS_STEP";
//     }
//   | {
//       type: "UPDATE_PERSONAL_INFO";
//       payload: {
//         field: keyof PersonalInfo;
//         value: string;
//       };
//     }
//   | {
//       type: "UPDATE_ADDRESS_INFO";
//       payload: {
//         field: keyof AddressInfo;
//         value: string;
//       };
//     }
//   | {
//       type: "RESET_FORM";
//     };

// export interface FormContextType {
//   state: FormState;
//   dispatch: React.Dispatch<FormAction>;
// }



export type FormActionType =
  | {
      type: "NEXT_STEP";
    }
  | {
      type: "PREVIOUS_STEP";
    }
  | {
      type: "UPDATE_PERSONAL_INFO";
      payload: {
        field:
          | "firstname"
          | "lastname"
          | "email"
          | "phone";
        value: string;
      };
    }
  | {
      type: "UPDATE_ADDRESS_INFO";
      payload: {
        field:
          | "address"
          | "city"
          | "state"
          | "zip";
        value: string;
      };
    }
  | {
      type: "RESET_FORM";
    };