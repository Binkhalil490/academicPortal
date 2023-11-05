import { ApprovableEntity } from "../super-model/approvable-model";

export interface User extends ApprovableEntity{
    // name?: string;
    // username?: string;
    // password?: string;
    // roles?: string;

    id?: number; // As the backend model has an ID field
    username?: string;
    password?: string;
    email?: string; // Adding this field based on the Java model
    role?: string; // Singular "role" as in the provided Java model
}