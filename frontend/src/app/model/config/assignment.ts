import { Course } from "./course";

export interface Assignment {
    id?: number;
    title?: string;
    description?: string;
    dueDate?: Date;
    courseId?: number;
    courses? : Course[];
}
