import { AuditAbleModel } from "../super-model/audit-able-model";

export interface Team extends AuditAbleModel {
    name?:string;
    leader?:string;
    members?:number//List<Employee>
}