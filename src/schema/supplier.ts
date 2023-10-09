import { z } from "zod";

export const supplierSchema = z.object({
    id: z.string().min(1, { message: 'Code is required.' }),
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
    taxType: z.string().nullish()
  })

export const supplierPostSchema = supplierSchema.omit({ id: true });