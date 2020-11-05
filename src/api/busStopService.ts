import service from "./BusStopServiceMock";

const busStopService = {
  getAll: () => service.getAllStops(),
  addDonation: (stopId: number, donationAmount: number) =>
    service.addDonation(stopId, donationAmount),
};

export default busStopService;
