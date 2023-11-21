import { Course } from "./course";

export interface ExamSchedule {
    id?: number;
    
    examDetails?: string;
    examDate?: Date;
    courses? : Course[];
}
