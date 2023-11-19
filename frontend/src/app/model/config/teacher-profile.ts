import { AuditAbleModel } from "../super-model/audit-able-model";
import { User } from "../auth/user"; // Import User if needed
import { Course } from "./course";

export interface TeacherProfile extends AuditAbleModel {
    id?: number;
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
    department?: string;
    employeeId?: string;
    academicSession?: string;
    courses? : Course[];
    user?: User; // This property represents the associated User entity
  }
  
