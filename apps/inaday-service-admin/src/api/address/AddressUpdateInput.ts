import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  city?: string | null;
  country?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  state?: string | null;
  street?: string | null;
  zipcode?: string | null;
};
