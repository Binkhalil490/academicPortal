// assignment-submission.model.ts

export class AssignmentSubmission {
  id?: number;
  assignmentId?: number;
  studentId?: number;
  submissionDate?: Date;
  submissionContent?: string;
  grade?: string;

  constructor(data?: Partial<AssignmentSubmission>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
