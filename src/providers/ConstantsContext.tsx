import React from "react";

const ConstantsContext = React.createContext({
  targetDonationForEach: 700,
  targetDonationCurrency: "$",
});
ConstantsContext.displayName = "ConstantsContext";

const ConstantsProvider = ({ children }: { children: React.ReactNode }) => {
  const [constants, setConstants] = React.useState({
    targetDonationForEach: 700,
    targetDonationCurrency: "$",
  });

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
