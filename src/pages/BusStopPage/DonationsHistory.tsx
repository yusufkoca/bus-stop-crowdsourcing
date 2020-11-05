import React, { ReactElement } from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { BusStop } from "../../types";
import { useDonations } from "../../providers/DonationsContext";
import { useConstants } from "../../providers/ConstantsContext";

type DonationsHistoryProps = {
  busStop: BusStop;
};

const DonationsHistory = ({ busStop }: DonationsHistoryProps): ReactElement => {
  const { donations: allDonations } = useDonations();
  const { targetDonationCurrency } = useConstants();
  const stopsDonations = allDonations.filter(
    (donation) => donation.busStopId === busStop.stopId
  );

  if (stopsDonations.length > 0) {
    return (
      <List>
        {stopsDonations.map((donation, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={donation.donor.name}
              secondary={donation.amount + targetDonationCurrency}
            />
          </ListItem>
        ))}
      </List>
    );
  } else {
    return (
      <Typography variant="h5" align="center">
        No donations yet :(
      </Typography>
    );
  }
};

export default DonationsHistory;
