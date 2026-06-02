import React, { useReducer } from "react";
import { FormContext } from "./FormContext";
import { formReducer, initialFormState } from "../../reducer/form.reducer";

type Props = {
  children: React.ReactNode;
};

export const FormProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    formReducer,
    initialFormState
  );

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};