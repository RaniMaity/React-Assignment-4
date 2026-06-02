import { createContext } from "react";
import type { FormState } from "../Services/typescript/interface/Form.interface";
import type { FormActionType } from "../Services/typescript/type/form.type";

export type FormContextType = {
  state: FormState;
  dispatch: React.Dispatch<FormActionType>;
};

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);