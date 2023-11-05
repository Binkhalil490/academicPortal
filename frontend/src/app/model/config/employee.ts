import { AuditAbleModel } from "../super-model/audit-able-model";
import { Team } from "./team-model";

export interface Employee extends AuditAbleModel {
    name?:string;
    designation?:string;
    phone?:string;
    team?:Team;
}