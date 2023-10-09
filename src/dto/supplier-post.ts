import { createZodDto } from "nestjs-zod";
import { supplierSchema } from "../schema";

export class SupplierPostDto extends createZodDto(supplierSchema.omit({ id: true })) {}
