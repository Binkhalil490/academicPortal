import { Client } from "../config/client";
import { Employee } from "../config/employee";
import { Plot } from "../config/plot";
import { AuditAbleModel } from "../super-model/audit-able-model";

export interface ClientApplication extends AuditAbleModel {
    fileNo?: string;
applicant?: Client;
plotDetails?: Plot;
// salesMode?: SalesMode;
bookingMoney?: number;
bookingPayMedia?: number;
payment?: string;
bookingPayDate?: Date;
bank?: string;
branch?: string;
// paymentType?: PaymentType;
paymentPercentage?: number;
paymentAmount?: number;
paymentDate?: Date;
noOfInstallment?: number;
installmentAmount?: number;
installmentStartDate?: Date;
seller?: Employee;
authorizedBy?: Employee;
}