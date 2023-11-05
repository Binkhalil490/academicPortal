import { Employee } from "../config/employee";
import { PaymentConfig } from "../config/payment-config";
import { AuditAbleModel } from "../super-model/audit-able-model";
import { ClientApplication } from "./clientApplication";

export interface SalesProposal extends AuditAbleModel {
fileNo?: string;
sellerBm?: number;
sellerDp?: number;
sellerIns?: number;
teamLeadBm?: number;
teamLeadDp?: number;
teamLeadIns?: number;
seniorGmBm?: number;
seniorGmDp?: number;
seniorGmIns?: number;
soldByPriceList?: boolean;
applicationDuration?: number;
applicationDate?: Date;
applicationDetails?: ClientApplication;
listedPrice?: number;
soldPrice?: number;
discount?: number;
totalLandValue?: number;
totalLandValueWords?: string;
downPayment?: number;
downPaymentDate?: Date;
downPayable?: number;
downPayableDate?: Date;
restAmount?: number;
installmentAmount?: number;
grandTotal?: number;
paymentConfig?: PaymentConfig;
remarks?: string;
teamLeader?: Employee;
seniorGM?: Employee;
directorOperation?: Employee;
managingDirector?: Employee;
}