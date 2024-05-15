export class CustomerDetailModel{
    id : string = "";
    type: CustomerDetailTypeModel = new CustomerDetailTypeModel();
    date : string = "";
    depositAmount: number = 0;
    withdrawalAmount: number = 0;
    description : string = "";
    bankDetailId: string = "";
    cashRegisterDetailId: string = "";
}

export class CustomerDetailTypeModel{
    name: string = "";
    value : number = 0;
}