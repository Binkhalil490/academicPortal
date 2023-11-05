import { AuditAbleModel } from "../super-model/audit-able-model";

export interface Client extends AuditAbleModel {
    source?: string;
    clientId?: number;
    name?: string;
    fatherOrHusbandName?: string;
    motherName?: string;
    company?: string;
    designation?: string;
    profession?: string;
    age?: string;
    residentialHouse?: string;
    district?: string;//District
    phone?: string;
    currentAddress?: string;
    permanentAddress?: string;
    email?: string;
    dateOfBirth?: Date;
    nationality?: string;
    nid?: string;
    tinNo?: string;
    religion?: string;
    maritalStatus?: string;
    nomineeName?: string;
    nomineeRelation?: string;
    nomineeAddress?: string;
    nomineeNid?: string;
    nomineePhone?: string;
}