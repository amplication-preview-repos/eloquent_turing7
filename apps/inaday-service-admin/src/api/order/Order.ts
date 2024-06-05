import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  status?: "Option1" | null;
  totalPrice: number | null;
  updatedAt: Date;
};
