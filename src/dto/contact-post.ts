import { createZodDto } from "nestjs-zod";
import { contactSchema } from "../schema";

export class ContactPostDto extends createZodDto(contactSchema.omit({ id: true })) {}