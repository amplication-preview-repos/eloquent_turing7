import { Customer } from "../customer/Customer";

export type Address = {
  city: string | null;
  country: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  state: string | null;
  street: string | null;
  updatedAt: Date;
  zipcode: string | null;
};
