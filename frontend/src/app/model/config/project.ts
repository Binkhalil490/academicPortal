import { AuditAbleModel } from "../super-model/audit-able-model";
import { PaymentConfig } from "./payment-config";

export interface Project extends AuditAbleModel {
    name?: string;
paymentConfig?: PaymentConfig;
    
}