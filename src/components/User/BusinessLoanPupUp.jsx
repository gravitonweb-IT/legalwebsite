import React from "react";

const BusinessLoanPupUp = ({onClose}) => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-6 max-w-[350px] md:max-w-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Business Loan </h2>
          <p>
            Our Business Loan is tailored to fuel your entrepreneurial journey.
            Enjoy a flexible and competitive financing solution designed to meet
            diverse business needs. With competitive interest rates and
            customizable repayment terms, our loan empowers you to expand
            operations, invest in technology, or seize new opportunities. Our
            application process is streamlined, offering quick approval and
            disbursement. Our commitment extends beyond financial support; we
            aim to be your strategic partner in business growth. Whether you're
            a startup or an established enterprise, our Business Loan is crafted
            to drive success. Experience financial empowerment and elevate your
            business to new heights with our comprehensive lending solution.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
 
export default BusinessLoanPupUp;
