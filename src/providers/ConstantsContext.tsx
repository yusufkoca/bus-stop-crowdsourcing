import React, { ReactElement } from "react";

type ConstantsContextType = {
  targetDonationForEach: number;
  targetDonationCurrency: string;
};

const defaultContext: ConstantsContextType = {
  targetDonationForEach: parseInt(
    process.env.REACT_APP_TARGET_DONATION_AMOUNT_FOR_EACH || "700",
    10
  ),
  targetDonationCurrency: process.env.REACT_APP_TARGET_DONATION_CURRENCY || "$",
};

const ConstantsContext = React.createContext(defaultContext);
ConstantsContext.displayName = "ConstantsContext";

const ConstantsProvider = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  const [constants] = React.useState(defaultContext);

  return (
    <ConstantsContext.Provider value={constants}>
      {children}
    </ConstantsContext.Provider>
  );
};

const useConstants = (): ConstantsContextType => {
  const context = React.useContext(ConstantsContext);
  if (context === undefined) {
    throw new Error("useConstants must be used within a ConstantsProvider");
  }

  return context;
};
export { ConstantsProvider, ConstantsContext, useConstants };
