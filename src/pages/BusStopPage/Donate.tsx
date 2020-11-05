import React, { ReactElement } from "react";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import { useDonations } from "../../providers/DonationsContext";
import { BusStop } from "../../types";
import { Donor } from "../../types/Donation";

type DonateProps = {
  busStop: BusStop;
};

const Donate = ({ busStop }: DonateProps): ReactElement => {
  const { addDonation } = useDonations();
  const makePayment = (donationAmount: number, donor: Donor) => {
    addDonation(busStop.stopId, donationAmount, donor);
  };
  return <PaymentForm handlePaymentDone={makePayment} />;
};

export default Donate;
