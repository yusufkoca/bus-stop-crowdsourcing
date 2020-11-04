import React from "react";

const defaultContext = {
  targetDonationForEach:
    process.env.REACT_APP_TARGET_DONATION_AMOUNT_FOR_EACH || 700,
  targetDonationCurrency: process.env.REACT_APP_TARGET_DONATION_CURRENCY || "$",
};

const ConstantsContext = React.createContext(defaultContext);
ConstantsContext.displayName = "ConstantsContext";

const ConstantsProvider = ({ children }: { children: React.ReactNode }) => {
  const [constants, setConstants] = React.useState(defaultContext);

  return (
    <ConstantsContext.Provider value={constants}>
      {children}
    </ConstantsContext.Provider>
  );
};

const useConstants = () => {
  const context = React.useContext(ConstantsContext);
  if (context === undefined) {
    throw new Error("useConstants must be used within a ConstantsProvider");
  }

  return context;
};
export { ConstantsProvider, ConstantsContext, useConstants };
