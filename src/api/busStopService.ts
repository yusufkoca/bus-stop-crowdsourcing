import service from "./BusStopServiceMock";

const busStopService = {
  getAll: () => service.getAllStops(),
};

export default busStopService;
