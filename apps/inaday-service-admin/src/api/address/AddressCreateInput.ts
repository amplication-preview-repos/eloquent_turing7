import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  city?: string | null;
  country?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  street?: string | null;
  zipcode?: string | null;
};
