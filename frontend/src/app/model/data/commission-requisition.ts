import { Employee } from "../config/employee";
import { AuditAbleModel } from "../super-model/audit-able-model";
import { SalesProposal } from "./sales-proposal";

export interface CommissionRequisition extends AuditAbleModel {
    employee?:Employee;
salesProposal?:SalesProposal;
salesType?:String;
bookingAmount?:number;
downPayAmount?:number;
partPayAmount?:number;
installmentAmount?: number;
date?:Date;
commission?:number;
remarks?:string;
}