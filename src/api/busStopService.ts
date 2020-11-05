import { BusStop } from "../types";
import service from "./BusStopServiceMock";

const busStopService = {
  getAll: (): BusStop[] => service.getAllStops(),
  addDonation: (stopId: number, donationAmount: number): void =>
    service.addDonation(stopId, donationAmount),
};

export default busStopService;
