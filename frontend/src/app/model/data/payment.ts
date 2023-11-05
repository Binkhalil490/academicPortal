import { AuditAbleModel } from "../super-model/audit-able-model";

export interface Payment extends AuditAbleModel {
    reason?: string;
    reference?: number;
    date?: Date;
    amount?: number;
}