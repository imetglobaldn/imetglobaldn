import React from 'react';

const Refund: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-8">
      <h2 className="text-2xl md:text-6xl font-semibold text-center text-red  mb-8">
        Refund Policy
      </h2>
      <p className="text-center text-gray-600 mb-6">
        If a student chooses to withdraw from the programme of study in which he/she is enrolled, the institution concerned shall follow the following three-tier system for the refund of fees* remitted by the student.
      </p>
      <div className="overflow-x-auto rounded-2xl border-gray-400 border-2">
        <table className="w-full border border-gray-300 text-gray-700">
          <thead>
            <tr className="bg-gray-200 text-lg">
              <th className="py-4 px-6 text-center font-semibold border-b border-gray-300">S.No.</th>
              <th className="py-4 px-6 text-center font-semibold border-b border-gray-300">Percentage of Refund of Fee</th>
              <th className="py-4 px-6 text-center font-semibold border-b border-gray-300">Point of Time When Notice of Withdrawal of Admissions is Received</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="py-4 px-6 border-b border-gray-300">1</td>
              <td className="py-4 px-6 border-b border-gray-300">60%</td>
              <td className="py-4 px-6 border-b border-gray-300">If the student withdraws during the first week of enrolment</td>
            </tr>
            <tr className="text-center bg-gray-50">
              <td className="py-4 px-6 border-b border-gray-300">2</td>
              <td className="py-4 px-6 border-b border-gray-300">40%</td>
              <td className="py-4 px-6 border-b border-gray-300">If the student withdraws during the second week of enrolment</td>
            </tr>
            <tr className="text-center">
              <td className="py-4 px-6">3</td>
              <td className="py-4 px-6">0%</td>
              <td className="py-4 px-6">No refund after the third week of enrolment</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Refund;
