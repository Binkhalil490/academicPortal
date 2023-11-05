import { AuditAbleModel } from "../super-model/audit-able-model";
import { Project } from "./project";

export interface Plot extends AuditAbleModel {
project?: Project;
plotNo?: string;
roadNo?: string;
sectorNo?: string;
ratePerKatha?: string;
block?: string;
areaInKatha?: string;
facing?: string;
totalPrice?: number;
totalPriceInWords?: string;
    
}