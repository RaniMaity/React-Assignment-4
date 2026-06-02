import React from "react";
import type { FormState } from "../../Services/typescript/interface/Form.interface";

type Props = {
  state: FormState;
};

const ReviewInfo = ({ state }: Props) => {
  const { personal, address } = state.formData;

  return (
    <div>

      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-[36px] font-bold text-gray-900">
          Review Information
        </h2>

        <p className="text-lg text-gray-500 mt-3">
          Please verify your information before submission.
        </p>
      </div>

      {/* REVIEW CARD */}
      <div className="border border-gray-200 rounded-3xl overflow-hidden bg-white">

        <div className="flex items-center justify-between px-8 py-6 border-b">
          <p className="text-gray-500 text-lg">
            Full Name
          </p>

          <h4 className="text-lg font-semibold text-gray-900">
            {personal.firstname} {personal.lastname}
          </h4>
        </div>

        <div className="flex items-center justify-between px-8 py-6 border-b">
          <p className="text-gray-500 text-lg">
            Email Address
          </p>

          <h4 className="text-lg font-semibold text-gray-900">
            {personal.email}
          </h4>
        </div>

        <div className="flex items-center justify-between px-8 py-6 border-b">
          <p className="text-gray-500 text-lg">
            Phone Number
          </p>

          <h4 className="text-lg font-semibold text-gray-900">
            {personal.phone}
          </h4>
        </div>

        <div className="flex items-center justify-between px-8 py-6">
          <p className="text-gray-500 text-lg">
            Address
          </p>

          <h4 className="text-lg font-semibold text-gray-900 text-right">
            {address.address}, {address.city},{" "}
            {address.state} - {address.zip}
          </h4>
        </div>

      </div>

    </div>
  );
};

export default ReviewInfo;