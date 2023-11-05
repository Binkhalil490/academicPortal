export interface Assignment {
    id?: number;
    title?: string;
    description?: string;
    dueDate?: Date;
    courseId?: number; // Assuming you have a course ID
}
