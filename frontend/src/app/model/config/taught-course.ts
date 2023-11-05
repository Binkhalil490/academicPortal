import { AuditAbleModel } from "../super-model/audit-able-model";
import { TeacherProfile } from "./teacher-profile"; // Import TeacherProfile if needed
import { Course } from "./course"; // Import Course if needed

export interface TaughtCourse extends AuditAbleModel {
    id?: number;
    teacher?: TeacherProfile; // Assuming TeacherProfile is a related model
    course?: Course; // Assuming Course is a related model
}
