import React from "react";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import DoneIcon from "@material-ui/icons/Done";
import NotDoneIcon from "@material-ui/icons/HourglassEmpty";
import { Link } from "react-router-dom";

const MapPin = ({
  text,
  lat,
  lng,
  tooltipText,
  goalReached = false,
  redirectTo,
}: {
  text: string;
  lat: number;
  lng: number;
  tooltipText: string;
  goalReached: boolean;
  redirectTo: string;
}) => (
  <Tooltip title={tooltipText}>
    <Link to={redirectTo}>
      <Chip
        clickable
        color={goalReached ? "primary" : "secondary"}
        size="small"
        icon={goalReached ? <DoneIcon /> : <NotDoneIcon />}
        label={text}
      />
    </Link>
  </Tooltip>
);

export default MapPin;
