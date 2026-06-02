import { createContext } from "react";
import type { FormActionType } from "../../Services/typescript/type/form.type";
import type { FormState } from "../../Services/typescript/interface/Form.interface";


export type FormContextType = {
  state: FormState;
  dispatch: React.Dispatch<FormActionType>;
};

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);