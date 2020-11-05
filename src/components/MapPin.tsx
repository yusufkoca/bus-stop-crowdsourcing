import React, { ReactElement } from "react";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import DoneIcon from "@material-ui/icons/Done";
import NotDoneIcon from "@material-ui/icons/HourglassEmpty";
import { Link } from "react-router-dom";

const MapPin = ({
  text,
  // these props are used by map plugin
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  lat,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
}): ReactElement => (
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
