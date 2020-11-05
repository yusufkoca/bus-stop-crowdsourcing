import { BusStop } from "../types";

const stops: BusStop[] = [
  {
    stopId: 1,
    lat: 39.925533,
    lng: 32.866287,
    donationsRaisedInDollars: 0,
    name: "Hertz at Portman Blvd",
  },
  {
    stopId: 2,
    lat: 39.91,
    lng: 32.85,
    donationsRaisedInDollars: 0,
    name: "Peachtree Center Mall",
  },
  {
    stopId: 3,
    lat: 39.89,
    lng: 32.82,
    donationsRaisedInDollars: 0,
    name: "Georgia Pacific",
  },
  {
    stopId: 4,
    lat: 39.93,
    lng: 32.89,
    donationsRaisedInDollars: 0,
    name: "Sheraton Atlanta",
  },
  {
    stopId: 5,
    lat: 40.0,
    lng: 32.81,
    donationsRaisedInDollars: 0,
    name: "Loudermilk Center",
  },
  {
    stopId: 6,
    lat: 39.95,
    lng: 32.85,
    donationsRaisedInDollars: 0,
    name: "Rialto Arts Center",
  },
  {
    stopId: 7,
    lat: 40.0,
    lng: 33.02,
    donationsRaisedInDollars: 0,
    name: "Sky View Atlanta",
  },
  {
    stopId: 8,
    lat: 39.99,
    lng: 32.75,
    donationsRaisedInDollars: 0,
    name: "Centennial Park",
  },
  {
    stopId: 9,
    lat: 39.97,
    lng: 32.73,
    donationsRaisedInDollars: 0,
    name: "Suntrust Plaza",
  },
  {
    stopId: 10,
    lat: 39.97,
    lng: 32.79,
    donationsRaisedInDollars: 0,
    name: "Sweet Auburn Market",
  },
];

class BusStopServiceMock {
  stops: BusStop[];

  constructor() {
    this.stops = stops;
  }

  /**
   * returns an array of all stops on success
   * on failure, throws Error
   */
  getAllStops() {
    this.randomlyFailWith("Unable to read database");

    return this.clone(stops);
  }

  /**
   * returns nothing on success
   * on failure, throws Error
   */
  addDonation(stopId: number, donationAmountInDollars: number) {
    this.randomlyFailWith("Unable to connect to database");

    const stop = stops.find(function (s) {
      return s.stopId == stopId;
    });

    if (!stop) {
      throw new Error("Stop with stop id " + stopId + " not found.");
    }

    stop.donationsRaisedInDollars += donationAmountInDollars;
  }

  // thanks to http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
  clone(obj: any): any {
    let copy: any;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.clone(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (const attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
      }
      return copy;
    }

    throw new Error("Unable to copy obj! Its type is not supported.");
  }

  randomlyFailWith(errorMessage: string) {
    if (Math.random() * 100 > 80.0) {
      throw new Error(errorMessage);
    }
  }
}

const mockService = new BusStopServiceMock();

export default mockService;
