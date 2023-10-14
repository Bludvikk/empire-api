import { z } from 'zod';
import { RefCategorySchema } from './ref-category';

export const DataCenterBaseSchema = z.object({
    businessCode: z.string(),
    id: z.string(),
    code: z.string().min(1, { message: 'Code is too short' }).max(30, { message: 'Code is too long.' }),
    name: z.string().min(1, { message: 'Name is too short ' }).max(50, { message: 'Name is too long' }),
    default: z.boolean().default(false),
    active: z.boolean().default(true),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const DataCenterDeleteSchema = z.object({
    key: z.string(),
});

const PostPutDataCenterSchema = DataCenterBaseSchema.omit({id: true,  businessCode: true, updatedAt: true, createdAt: true})

export const DataCenterPostSchema = z.object({
    values: z.string().or(PostPutDataCenterSchema),
});

export const DataCenterPutSchema = z.object({
    key: z.string(),
    values: z.string().or(PostPutDataCenterSchema),
});

export const ValidatePostSchema = z.object({
    value: z.string(),
    path: z.string(),
});
