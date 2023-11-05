import { AuditAbleModel } from "../super-model/audit-able-model";
import { TaughtCourse } from "./taught-course"; // Import TaughtCourse if needed

export interface Course extends AuditAbleModel {
    id?: number;
    courseCode?: string;
    courseName?: string;
    description?: string;
    courseMaterials?: string;
    syllabus?: string;
    taughtCourses?: TaughtCourse[]; // Assuming TaughtCourse is a related model
}
