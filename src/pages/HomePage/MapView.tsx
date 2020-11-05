import React, { ReactElement } from "react";
import GoogleMapReact from "google-map-react";
import MapPin from "../../components/MapPin";
import { BusStop } from "../../types";
import { useConstants } from "../../providers/ConstantsContext";

type MapViewProps = {
  busStops: BusStop[];
};

const MapView = ({ busStops }: MapViewProps): ReactElement => {
  const { targetDonationForEach, targetDonationCurrency } = useConstants();
  const defaultProps: {
    center: { lat: number; lng: number };
    zoom: number;
  } = {
    center: {
      lat: 39.92,
      lng: 32.86,
    },
    zoom: 11,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {busStops.map((busStop) => (
          <MapPin
            key={busStop.stopId}
            lat={busStop.lat}
            lng={busStop.lng}
            text={`${
              busStop.donationsRaisedInDollars + targetDonationCurrency
            } / ${targetDonationForEach}`}
            tooltipText={busStop.name}
            goalReached={
              busStop.donationsRaisedInDollars >= targetDonationForEach
            }
            redirectTo={"/bus-stops/" + busStop.stopId}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default MapView;
