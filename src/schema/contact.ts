import { z } from "nestjs-zod/z";

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
    address: z.string().nullish()
  })

export const contactPostDtoSchema = contactSchema.omit({ id: true });