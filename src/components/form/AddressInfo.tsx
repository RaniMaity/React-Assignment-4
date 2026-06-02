import React from "react";
import type { FormActionType } from "../../Services/typescript/type/form.type";
import type { FormState } from "../../Services/typescript/interface/Form.interface";

type Props = {
  state: FormState;
  dispatch: React.Dispatch<FormActionType>;
};

const AddressInfo = ({ state, dispatch }: Props) => {
  const { address } = state.formData;

  const handleChange = (
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

  return (
    <div>

      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-[36px] font-bold text-gray-900">
          Address Information
        </h2>

        <p className="text-lg text-gray-500 mt-3">
          Fill in your address details carefully.
        </p>
      </div>

      {/* FORM */}
      <div className="space-y-7">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Address
          </label>

          <input
            type="text"
            name="address"
            placeholder="Enter full address"
            value={address.address}
            onChange={handleChange}
            className="w-full h-[64px] rounded-2xl border border-gray-300 bg-white px-6 text-lg text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-3 gap-7">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              City
            </label>

            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              className="w-full h-[64px] rounded-2xl border border-gray-300 bg-white px-6 text-lg text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              State
            </label>

            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleChange}
              className="w-full h-[64px] rounded-2xl border border-gray-300 bg-white px-6 text-lg text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Zip Code
            </label>

            <input
              type="text"
              name="zip"
              placeholder="Zip code"
              value={address.zip}
              onChange={handleChange}
              className="w-full h-[64px] rounded-2xl border border-gray-300 bg-white px-6 text-lg text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default AddressInfo;