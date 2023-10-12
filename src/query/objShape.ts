    
export type SupplierResponse = ({
    group: {
        code: string;
        id: string;
        name: string;
        active: boolean;
    };
    class: {
        code: string;
        id: string;
        name: string;
        active: boolean;
    };
    contact: {
        id: string;
        firstName: string;
        lastName: string;
    } | null;
} & {
    businessCode: string;
    id: string;
    code: string;
    name: string;
    active: boolean;
    groupId: string;
    classId: string;
    details: string | null;
    tradeName: string | null;
    tinNo: string | null;
    website: string | null;
    contactId: string | null;
    addressId: string | null;
    priceList: string | null;
    discountCode: string | null;
    taxLiable: boolean | null;
    taxType: string | null;
    createdAt: Date;
    updatedAt: Date;
})