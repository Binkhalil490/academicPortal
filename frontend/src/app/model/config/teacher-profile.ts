import { AuditAbleModel } from "../super-model/audit-able-model";
import { User } from "../auth/user"; // Import User if needed
import { TaughtCourse } from "./taught-course"; // Import TaughtCourse if needed

export interface TeacherProfile extends AuditAbleModel {
    // id?: number;
    // user?: User; // Assuming User is a related model
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
    educationalBackground?: string;
    // coursesTaught?: TaughtCourse[]; // Assuming TaughtCourse is a related model
}
