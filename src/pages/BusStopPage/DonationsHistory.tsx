import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { BusStop } from "../../types";
import { useDonations } from "../../providers/DonationsContext";

type DonationsHistoryProps = {
  busStop: BusStop;
};

const DonationsHistory = ({ busStop }: DonationsHistoryProps) => {
  const { donations: allDonations } = useDonations();
  const stopsDonations = allDonations.filter(
    (donation) => donation.busStopId === busStop.stopId
  );

  return (
    <List>
      {stopsDonations.map((donation, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={donation.donor.name}
            secondary={donation.amount}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default DonationsHistory;
