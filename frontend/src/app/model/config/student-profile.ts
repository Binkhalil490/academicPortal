import { AuditAbleModel } from "../super-model/audit-able-model";

export interface StudentProfile extends AuditAbleModel {
    // id?: number;
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
    academicHistory?: string;
    email?: string;
    // Assuming you might want to represent the related user in some way in the frontend:
    // userId?: number; // Or another User interface/type if you have it.
}
