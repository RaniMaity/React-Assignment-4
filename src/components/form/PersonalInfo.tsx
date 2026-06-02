import React from "react";
import type { FormActionType } from "../../Services/typescript/type/form.type";
import type { FormState } from "../../Services/typescript/interface/Form.interface";

type Props = {
  state: FormState;
  dispatch: React.Dispatch<FormActionType>;
};

const PersonalInfo = ({ state, dispatch }: Props) => {
  const { personal } = state.formData;

  const handleChange = (
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

  return (
    <div>

      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-[36px] font-bold text-gray-900">
          Personal Information
        </h2>

        <p className="text-lg text-gray-500 mt-3">
          Enter your personal details below.
        </p>
      </div>

      {/* FORM */}
      <div className="space-y-7">

        <div className="grid grid-cols-2 gap-7">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              First Name
            </label>

            <input
              type="text"
              name="firstname"
              placeholder="Enter first name"
              value={personal.firstname}
              onChange={handleChange}
              className="w-full h-[64px] rounded-2xl border border-gray-300 bg-white px-6 text-lg text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Last Name
            </label>

            <input
              type="text"
              name="lastname"
              placeholder="Enter last name"
              value={personal.lastname}
              onChange={handleChange}
              className="w-full h-[64px] rounded-2xl border border-gray-300 bg-white px-6 text-lg text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            />
          </div>

        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={personal.email}
            onChange={handleChange}
            className="w-full h-[64px] rounded-2xl border border-gray-300 bg-white px-6 text-lg text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={personal.phone}
            onChange={handleChange}
            className="w-full h-[64px] rounded-2xl border border-gray-300 bg-white px-6 text-lg text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
          />
        </div>

      </div>

    </div>
  );
};

export default PersonalInfo;