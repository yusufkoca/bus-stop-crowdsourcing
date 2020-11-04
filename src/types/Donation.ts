export type Donation = {
  amount: number;
  busStopId: number;
  date: Date;
  donor: Donor;
};

export type Donor = {
  email?: string;
  name: string;
};
