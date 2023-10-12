import { z } from 'zod';

export const contactSchema = z.object({
    id: z.string().min(1, { message: 'ID is required.' }).default('create'),
    firstName: z.string().min(1, { message: 'First Name is required.' }).default(''),
    middleName: z.string().nullish(),
    lastName: z.string().min(1, { message: 'Last Name is required.' }).default(''),
    active: z.boolean().default(true),
    salutationId: z.string().nullish(),
    designationId: z.string().nullish(),
    genderId: z.string().nullish(),
    companyName: z.string().nullish(),
    address: z.string().nullish(),
});

export const MasterContactEmailSchema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).default(''),
    isPrimary: z.boolean().default(false),
});


export const MasterContactPhoneSchema = z.object({
    phone: z.string().min(1, { message: 'Phone number is required' }).default(''),
    isPrimary: z.boolean().default(false),
});


export const contactPostDtoSchema = contactSchema.omit({ id: true });


