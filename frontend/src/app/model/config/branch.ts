import { AuditAbleModel } from "../super-model/audit-able-model";

export interface Branch extends AuditAbleModel {
    name?: string;
    address?: string;
    contactNo?: string;
}