import React from 'react'

const PeronalLoanPopup = ({ onClose }) => {
  return (
    <>
     <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-6 max-w-[350px] md:max-w-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Peronal Loan </h2>
          <p>
            Our Personal Loan terms and conditions are designed to provide clarity
            and transparency. By availing our services, you agree to repay the
            borrowed amount within the specified tenure, accompanied by applicable
            interest rates. Ensure timely payments to maintain a positive credit
            history. Any deviation may incur additional charges. We prioritize
            responsible lending and encourage open communication. Read our
            detailed terms and conditions document for a comprehensive
            understanding. We aim to empower you with financial flexibility while
            maintaining a mutually beneficial relationship. Your commitment to
            these terms ensures a seamless and rewarding borrowing experience.
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
  )
}

export default PeronalLoanPopup