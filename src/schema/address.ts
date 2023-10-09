import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

export const addressSchema = z.object({
    id: z.string().min(1, { message: 'ID is required.' }).default('create'),
    active: z.boolean().default(true),
    title: z.string().min(1, { message: 'Address Title is required.' }).default(''),
    typeId: z.string().min(1, { message: 'Address Type is required.' }).default(''),
    line1: z.string().min(1, { message: 'Address Line 1 is required.' }).default(''),
    line2: z.string().nullish(),
    cityTown: z.string().nullish(),
    stateProvince: z.string().nullish(),
    countryId: z.string().nullish(),
    postalCode: z.string().nullish(),
    email: z.string().nullish(),
    contactNo: z.string().nullish(),
    faxNo: z.string().nullish(),
    billingAdd: z.boolean().default(false),
    shippingAdd: z.boolean().default(false)
  })

  export const addressPostDtoSchema = addressSchema.omit({ id: true });