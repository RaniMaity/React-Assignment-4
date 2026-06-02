import type { FormState } from "../../Services/typescript/interface/Form.interface";

type Props = {
  state: FormState;
};

const Stepper = ({ state }: Props) => {
  const { currentStep } = state;

  const steps = [
    "Personal Info",
    "Address Info",
    "Review",
  ];

  return (
    <div className="flex justify-between mb-6">
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        return (
          <div
            key={step}
            className="flex flex-col items-center"
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                currentStep === stepNumber
                  ? "bg-blue-500"
                  : currentStep > stepNumber
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            >
              {stepNumber}
            </div>

            <span className="text-xs mt-1">{step}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
