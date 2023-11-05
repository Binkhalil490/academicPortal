import { AuditAbleModel } from "../super-model/audit-able-model";

export interface Organization extends AuditAbleModel {
    name?: string;
address?: string;
email?: string;
contactNo?: string;
}