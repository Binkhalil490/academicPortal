import { AuditAbleModel } from "../super-model/audit-able-model";

export interface Location extends AuditAbleModel {
    house?: string;
    street?: string;
    villageOrCity?: string;
    thana?: string;
    upazila?: string;
    district?: string;
    postalCode?: string;
}