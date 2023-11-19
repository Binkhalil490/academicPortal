import { AuditAbleModel } from "../super-model/audit-able-model";


export interface Enrollment extends AuditAbleModel {
    id?: number;
    studentId?: number;
    courseId?: number;
    enrollmentDate?: Date;

   
}

