import { CustomerDetailModel } from "./customer-detail.model";

export class CustomerModel {
  id: string = '';
  name: string = '';
  city: string = '';
  town: string = '';
  type: CustomerTypeEnum = new CustomerTypeEnum();
  typeValue: number = 1;
  fullAddress: string = '';
  depositAmount: number = 0;
  withdrawalAmount: number = 0;
  taxDepartment: string = '';
  taxNumber: string = '';
  details:CustomerDetailModel[]=[];
}

export class CustomerTypeEnum {
  name: string = '';
  value: number = 1;
}

export const CustomerTypes: CustomerTypeEnum[] = [
  {
    name: "Ticari Alıcılar",
    value: 1
  },
  {
    name: "Ticari Satıcılar",
    value: 2
  },
  {
    name: "Personel",
    value: 3
  },
  {
    name: "Ortaklar",
    value: 4
  }
]
