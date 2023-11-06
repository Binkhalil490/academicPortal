import { AuditAbleModel } from "../super-model/audit-able-model";


interface studentReg extends AuditAbleModel{
    userId?: number;
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
    department?: string;
    session?: string;
    username?: string;
    email?: string;
    role?: string;

   
}
