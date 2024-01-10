const HomeLoanPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 max-w-[350px] md:max-w-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Home Loan </h2>
        <p>
          Welcome to our Home Loan services! Navigate our website to access
          valuable insights and expert advice, guiding you towards your dream
          home. Uncover tailored loan solutions designed to suit your unique
          needs, ensuring a seamless and personalized experience. Our commitment
          is to provide comprehensive support throughout your home ownership
          journey. Discover financial solutions that empower your homeownership
          goals with ease and confidence.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HomeLoanPopup;
