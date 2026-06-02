import type { FormState } from "../../Services/typescript/interface/Form.interface";

type Props = {
  state: FormState;
  onSubmit: () => void;
};

const SubmitBtn = ({ state, onSubmit }: Props) => {
  const { currentStep } = state;

  if (currentStep !== 3) return null;

  return (
    <button
      onClick={onSubmit}
      className="bg-green-600 text-white px-6 py-2 rounded mt-4"
    >
      Submit Form
    </button>
  );
};

export default SubmitBtn;
