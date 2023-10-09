import { z } from 'zod';
import * as dto from '../dto';

export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

export type DataCenterDelete = Prettify<dto.DataCenterDeleteDto>;
export type DataCenterPost = Prettify<dto.DataCenterPostDto>;
export type DataCenterPut = Prettify<dto.DataCenterPutDto>;
export type DataCenterQuery = Prettify<dto.DataCenterPrismaQueryDto>;
export type DataCenterValidate = Prettify<dto.ValidatePostDto>;
export type RefTerms = Prettify<dto.RefTermsDto>;
export type RefPayment = Prettify<dto.RefPaymentDto>;
export type RefCategory = Prettify<dto.RefCategoryDto>;
export type RefDiscount = Prettify<dto.RefDiscountDto>;
export type DataCenterBase = Prettify<dto.DataCenterBaseDto>;
export type PortalAuth = {
    businessCode: string;
    locationCode: string;
    app: 'empire' | 'empire-core';
};

export interface EmpireApiServiceConfig {
    apiKey: string;
    businessCode: string;
}

// libs --> TODO
export const DATACENTER_TABLES = [
    'brand',
    'division',
    'family',
    'generic-type',
    'uom',
    'bank',
    'card-type',
    'shipping-method',
    'category',
    'payment',
    'discount',
    'terms',
    'supplier-class',
    'supplier-group',
] as const;


export type DataCenterTables = (typeof DATACENTER_TABLES)[number] | (string & {})


export const DataCenterEnum = z.enum([...DATACENTER_TABLES]);

const baseHeaderSchema = z.object({
    Authorization: z.string(),
    'x-business-code': z.string(),
});

export const dataCenterHeaderSchema = baseHeaderSchema.merge(z.object({ path: z.enum([...DATACENTER_TABLES]) }));

// , 'x-user-id': z.string()
