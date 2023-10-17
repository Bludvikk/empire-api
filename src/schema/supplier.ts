import { z } from 'zod';

export const supplierSchema = z.object({
    id: z.string().min(1, { message: 'Code is required.' }),
    businessCode: z.string(),
    code: z.string().min(1, { message: 'Code is required.' }),
    name: z.string().min(1, { message: 'Name is required.' }),
    active: z.boolean().default(true),
    groupId: z.string().min(1, { message: 'Supplier group is required.' }),
    classId: z.string().min(1, { message: 'Supplier class is required.' }),
    details: z.string().nullish(),
    tradeName: z.string().nullish(),
    tinNo: z.string().nullish(),
    website: z.string().url().nullish().or(z.literal('')),
    contactId: z.string().nullish(),
    addressId: z.string().nullish(),
    priceList: z.string().nullish(),
    discountCode: z.string().nullish(),
    taxLiable: z.boolean().default(false),
    taxType: z.string().nullish(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
});

// export const supplierPostSchema = supplierSchema.omit({ id: true });

export const SupplierResponse = z.object({
    data: z.array(
        z
            .object({
                group: z.object({
                    code: z.string(),
                    id: z.string(),
                    name: z.string(),
                    active: z.boolean(),
                }),
                class: z.object({
                    code: z.string(),
                    id: z.string(),
                    name: z.string(),
                    active: z.boolean(),
                }),
            })
            .and(
                z.object({
                    businessCode: z.string(),
                    id: z.string(),
                    code: z.string(),
                    name: z.string(),
                    active: z.boolean(),
                    groupId: z.string(),
                    classId: z.string(),
                    details: z.string().nullable(),
                    tradeName: z.string().nullable(),
                    tinNo: z.string().nullable(),
                    website: z.string().nullable(),
                    contactId: z.string().nullable(),
                    addressId: z.string().nullable(),
                    priceList: z.string().nullable(),
                    discountCode: z.string().nullable(),
                    taxLiable: z.boolean().nullable(),
                    taxType: z.string().nullable(),
                    createdAt: z.date(),
                    updatedAt: z.date(),
                }),
            ),
    ),
});
