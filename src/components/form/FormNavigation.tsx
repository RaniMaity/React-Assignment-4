import React from "react";
import type { FormActionType } from "../../Services/typescript/type/form.type";
import type { FormState } from "../../Services/typescript/interface/Form.interface";

type Props = {
  state: FormState;
  dispatch: React.Dispatch<FormActionType>;
  onSubmit: () => void;
};

const FormNavigation = ({ state, dispatch, onSubmit }: Props) => {
  const { currentStep } = state;

  return (
    <div className="flex gap-2 mt-5">
      {currentStep > 1 && (
        <button
          onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
          className="bg-gray-500 text-white px-4 py-2"
        >
          Previous
        </button>
      )}

      {currentStep < 3 && (
        <button
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Next
        </button>
      )}

      {currentStep === 3 && (
        <button
          onClick={onSubmit}
          className="bg-green-500 text-white px-4 py-2"
        >
          Submit
        </button>
      )}

      <button
        onClick={() => dispatch({ type: "RESET_FORM" })}
        className="bg-red-500 text-white px-4 py-2"
      >
        Reset
      </button>
    </div>
  );
};

export default FormNavigation;