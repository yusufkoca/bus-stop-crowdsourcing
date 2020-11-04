import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { BusStop } from "../../types";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useConstants } from "../../providers/ConstantsContext";
import { useDonations } from "../../providers/DonationsContext";
import { Donation } from "../../types/Donation";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row(props: { row: BusStop }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const { targetDonationForEach, targetDonationCurrency } = useConstants();
  const { donations } = useDonations();
  const busStopDonations = donations.filter(
    (donation) => donation.busStopId === row.stopId
  );
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.stopId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell align="right">
          {row.donationsRaisedInDollars + targetDonationCurrency}
        </TableCell>
        <TableCell align="right">
          {targetDonationForEach + targetDonationCurrency}
        </TableCell>
        <TableCell>
          <Button
            color="secondary"
            component={Link}
            to={"/bus-stops/" + row.stopId}
            variant="contained"
          >
            Donate
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Donations
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Donor</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                {
                  <TableBody>
                    {busStopDonations.map((donation: Donation, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {donation.date.toLocaleString()}
                        </TableCell>
                        <TableCell>{donation.donor.name}</TableCell>
                        <TableCell align="right">{donation.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                }
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ rows }: { rows: BusStop[] }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Stop Id</TableCell>
            <TableCell>Stop Name</TableCell>
            <TableCell align="right">Current Donations</TableCell>
            <TableCell align="right">Target Donations</TableCell>
            <TableCell>Donate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: BusStop) => (
            <Row key={row.stopId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
