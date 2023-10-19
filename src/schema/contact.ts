import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
export const MasterContactEmailSchema = z.object({
    id: z.string().default('create'),
    email: z.string(),
    isPrimary: z.boolean().default(false),
});

export const MasterContactPhoneSchema = z.object({
    id: z.string().default('create'),
    phone: z.string(),
    isPrimary: z.boolean().default(false),
});
export const contactSchema = z.object({
    id: z.string().min(1, { message: 'ID is required.' }),
    firstName: z.string().min(1, { message: 'First Name is required.' }).default(''),
    middleName: z.string().nullish(),
    lastName: z.string().min(1, { message: 'Last Name is required.' }).default(''),
    active: z.boolean().default(true),
    salutationId: z.string().nullish(),
    designationId: z.string().nullish(),
    genderId: z.string().nullish(),
    companyName: z.string().nullish(),
    address: z.string().nullish(),
    email: z.array(MasterContactEmailSchema).optional(),
    phoneNo: z.array(MasterContactPhoneSchema).optional(),
});

export const ContactDeleteSchema = z.object({
    key: z.string(),
});

export const MasterContactPutSchema = z.object({
    key: z.string().default(uuidv4()),
    values: contactSchema,
});

export type ContactDelete = z.infer<typeof ContactDeleteSchema>;
export type MasterContactPut = z.infer<typeof MasterContactPutSchema>;

export const ContactPostSchema = contactSchema.omit({ id: true });
