import { createZodDto } from "nestjs-zod";
import { addressSchema } from "../schema/address";

export class AddressPostDto extends createZodDto(addressSchema.omit({ id: true })) {}