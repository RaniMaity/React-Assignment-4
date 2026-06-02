
import React, { useReducer } from "react";
import { formReducer, initialFormState } from "../reducer/form.reducer";
import Stepper from "../components/form/stepper";


const WizardForm = () => {
  const [state, dispatch] = useReducer(
    formReducer,
    initialFormState
  );

  const { currentStep, formData } = state;

  const handlePersonalChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: "UPDATE_PERSONAL_INFO",
      payload: {
        field: e.target.name as
          | "firstname"
          | "lastname"
          | "email"
          | "phone",
        value: e.target.value,
      },
    });
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: "UPDATE_ADDRESS_INFO",
      payload: {
        field: e.target.name as
          | "address"
          | "city"
          | "state"
          | "zip",
        value: e.target.value,
      },
    });
  };

  const nextStep = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const prevStep = () => {
    dispatch({ type: "PREVIOUS_STEP" });
  };

  const resetForm = () => {
    dispatch({ type: "RESET_FORM" });
  };

  const handleSubmit = () => {
    console.log("FINAL DATA:", state.formData);

    alert("Form Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#eef3fb] flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-4xl">

        <div className="bg-white rounded-[30px] shadow-[0_20px_60px_rgba(15,23,42,0.12)] overflow-hidden border border-gray-100">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-10 py-10">

            <h1 className="text-4xl font-bold text-white">
              Registration Form
            </h1>

            <p className="text-blue-100 mt-3 text-base">
              Complete all steps to continue
            </p>

         
            <div className="mt-10">
              <Stepper state={state} />
            </div>
          </div>

          
          <div className="px-10 py-10">

      
            {currentStep === 1 && (
              <div>

                <h2 className="text-3xl font-bold text-gray-800">
                  Personal Information
                </h2>

                <p className="text-gray-500 mt-2 mb-10 text-[15px]">
                  Enter your personal details below
                </p>

                <div className="grid grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="firstname"
                      value={formData.personal.firstname}
                      onChange={handlePersonalChange}
                      placeholder="Enter first name"
                      className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastname"
                      value={formData.personal.lastname}
                      onChange={handlePersonalChange}
                      placeholder="Enter last name"
                      className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.personal.email}
                      onChange={handlePersonalChange}
                      placeholder="Enter email address"
                      className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      name="phone"
                      value={formData.personal.phone}
                      onChange={handlePersonalChange}
                      placeholder="Enter phone number"
                      className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                  </div>

                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div>

                <h2 className="text-3xl font-bold text-gray-800">
                  Address Information
                </h2>

                <p className="text-gray-500 mt-2 mb-10 text-[15px]">
                  Enter your address details below
                </p>

                <div className="space-y-6">

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Street Address
                    </label>

                    <input
                      type="text"
                      name="address"
                      value={formData.address.address}
                      onChange={handleAddressChange}
                      placeholder="Enter your address"
                      className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-6">

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        City
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={formData.address.city}
                        onChange={handleAddressChange}
                        placeholder="City"
                        className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        State
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={formData.address.state}
                        onChange={handleAddressChange}
                        placeholder="State"
                        className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Zip Code
                      </label>

                      <input
                        type="text"
                        name="zip"
                        value={formData.address.zip}
                        onChange={handleAddressChange}
                        placeholder="Zip Code"
                        className="w-full h-14 rounded-2xl border border-gray-300 px-5 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                      />
                    </div>

                  </div>
                </div>
              </div>
            )}

         
            {currentStep === 3 && (
              <div>

                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Review Information
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 space-y-7">

                  <div>
                    <p className="text-sm text-gray-500 mb-2">
                      Full Name
                    </p>

                    <h4 className="text-lg font-semibold text-gray-800">
                      {formData.personal.firstname}{" "}
                      {formData.personal.lastname}
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-2">
                      Email Address
                    </p>

                    <h4 className="text-lg font-semibold text-gray-800">
                      {formData.personal.email}
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-2">
                      Phone Number
                    </p>

                    <h4 className="text-lg font-semibold text-gray-800">
                      {formData.personal.phone}
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-2">
                      Address
                    </p>

                    <h4 className="text-lg font-semibold text-gray-800">
                      {formData.address.address},{" "}
                      {formData.address.city},{" "}
                      {formData.address.state} -{" "}
                      {formData.address.zip}
                    </h4>
                  </div>

                </div>
              </div>
            )}

            
            <div className="flex items-center justify-between mt-12">

              <div className="flex gap-4">

                {currentStep > 1 && (
                  <button
                    onClick={prevStep}
                    className="h-14 px-8 rounded-2xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all"
                  >
                    Previous
                  </button>
                )}

                <button
                  onClick={resetForm}
                  className="h-14 px-8 rounded-2xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-all shadow-md"
                >
                  Reset
                </button>

              </div>

              <div>
                {currentStep < 3 ? (
                  <button
                    onClick={nextStep}
                    className="h-14 px-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="h-14 px-10 rounded-2xl bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-all"
                  >
                    Submit Form
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardForm;

