import React from "react";

const DisclaimerSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-8">
      <h2 className="text-2xl md:text-7xl text-red  font-semibold text-center  mb-6">
        Disclaimer
      </h2>
      <div className="text-gray-700 space-y-4">
        <p>
          Admission to all the courses and programs at iMET Global are strictly
          on a merit basis based on the criteria and eligibility processes as
          prescribed officially by GMAC (for both GMAT and NMAT) and assessment
          of individual’s performance as per iMET’s Personal Interviews, Profile
          as submitted, and case-based presentation for Global Post Graduate
          Program (PGP) Studies, Executive Certificate Program (ECP), and
          Certificate Program (CP).
        </p>
        <p>
          We also consider GMAT/NMAT equivalent scores like CAT, XAT, and SNAP
          only for Global PGP studies.
        </p>
        <p>
          iMET does not work on EdTech models of commercializing education with
          hyped marketing ads or by giving offers or discounts or work as a
          marketing agent of any university or college.
        </p>
        <p>
          iMET, as a part of section 8 not-for-profit education entity, works in
          alliance with foreign universities and international education
          affiliates to give their students global exposure including the option
          to study in the foreign university as a part of iMET Global only by
          awarding dual qualification and by conforming to the policy guidelines
          of the foreign university partner.
        </p>
        <p>
          iMET’s Global PGP and ECP studies also give international internship
          opportunities that may turn into full-time employment, subject to
          immigration laws and business scenarios at the time of placements.
        </p>
        <p>
          All aspirants/parents are hereby notified that some
          individuals/organizations are giving/making false and misleading
          advertisements/claims in newspapers, websites, and social media
          platforms that they can ensure study from abroad by ensuring
          admission to iMET Global and are also charging hefty amounts for the
          same.
        </p>
        <p>
          In this regard, iMET requests the aspirants/parents to refrain from
          entering into any transaction with such elements. iMET has not
          appointed any individual/agency/organization to make such assurances
          on its behalf.
        </p>
        <p>
          Despite this notice, if any aspirant/parent still proceeds with or
          enters into a transaction with such elements, they would be doing so
          at their own risk and cost.
        </p>
        <div className="mt-6 text-center">
          <p className="font-semibold">Governing Council</p>
          <p>iMET Global</p>
          <p>Pradurbhav Foundation for Skills and Social Development</p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
