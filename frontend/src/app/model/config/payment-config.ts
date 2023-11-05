import { AuditAbleModel } from "../super-model/audit-able-model";

export interface PaymentConfig extends AuditAbleModel {
    name?: string;
bookingMoneyPerKatha?: number;
onePaymentDuration?: number;
downPaymentDuration?: number;
downPaymentPercentage?: number;
delayCharge?: number;
}