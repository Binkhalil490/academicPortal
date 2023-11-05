import { AuditAbleModel } from "../super-model/audit-able-model";
import { StudentProfile } from "./student-profile"; // Import StudentProfile if needed
import { Course } from "./course"; // Import Course if needed

export interface AttendanceRecord extends AuditAbleModel {
    id?: number;
    student?: StudentProfile; // Assuming StudentProfile is a related model
    course?: Course; // Assuming Course is a related model
    date?: Date; // Assuming you want to store the date as a JavaScript Date object
    status?: string; // You can define an enum for better representation (present, absent, etc.)
}
