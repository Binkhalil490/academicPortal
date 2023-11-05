import { VehicleRequisition } from "../data/vehicle-requisition";
import { AuditAbleModel } from "../super-model/audit-able-model";
import { Client } from "../config/client";
import { Employee } from "../config/employee";

export interface Schedule extends AuditAbleModel {

    scheduleDate?:Date;
    employee?:Employee;
    driver?:Employee;
    personCount?:Number;
    staffPickUpPlace?:string;
    clientPickUpPlace?:string;
    startingTime?:Date;
    clientPickUpTime?: Date;
    client?:Client;
    requisition?:VehicleRequisition;
}