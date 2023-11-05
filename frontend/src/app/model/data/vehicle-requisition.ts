import { Client } from "../config/client";
import { Employee } from "../config/employee";
import { Project } from "../config/project";
import { Team } from "../config/team-model";
import { AuditAbleModel } from "../super-model/audit-able-model";

export interface VehicleRequisition extends AuditAbleModel {
    requisitionNo?:number;
    employee?:Employee;
    team?:Team;
    visitingDate?:Date;
    startingTime?:Date;
    project?:Project;
    numberOfPersons?:number;
    staffPickUpPlace?:number;
    clientPickUpPlace?:string;
    pickUpTime?:Date;
    clientDropPlace?:string;
    personalMeetWithClient?:boolean;
    clientTalkByPriceList?:boolean;
    meetingDate?:Date;
    client?:Client;
    teamLeader?:Employee;
    srGeneralManager?:Employee;
    directorOfOperation?:Employee;
}