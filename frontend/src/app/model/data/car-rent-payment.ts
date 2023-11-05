import { Employee } from "../config/employee";
import { AuditAbleModel } from "../super-model/audit-able-model";
import { VehicleRequisition } from "./vehicle-requisition";

export interface CarRentPayment extends AuditAbleModel {
    vehicleRequisition?: VehicleRequisition;
visitDate?: Date;
employee?: Employee;
startTime?: Date;
vehicleName?: string;
supplierName?: string;
amount?: number;
remarks?: string;

}