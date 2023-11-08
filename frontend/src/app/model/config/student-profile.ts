import { User } from "../auth/user";
import { AuditAbleModel } from "../super-model/audit-able-model";

export interface StudentProfile extends AuditAbleModel {
    // id?: number;
    user?: User;
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
    department?: string;
    roll?: string
    session?: string;
    
   

    // Assuming you might want to represent the related user in some way in the frontend:
    // userId?: number; // Or another User interface/type if you have it.
}
