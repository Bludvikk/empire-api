import { initContract } from '@ts-rest/core';
import {
    DataCenterDeleteSchema,
    DataCenterPostSchema,
    DataCenterPrismaQuerySchema,
    DataCenterPutSchema,
    ValidatePostSchema,
    addressPostDtoSchema,
    contactPostDtoSchema,
    supplierPostSchema,
} from '../schema';
import { DataCenterBase, dataCenterHeaderSchema, referenceSearchQuerySchema } from '../types/index';
const c = initContract();
import { z } from 'zod';

const tempSchema = z.object({
    businessCode: z.string(),
    id: z.string(),
    code: z.string(),
    name: z.string(),
    default: z.boolean(),
    active: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

const dataCenter = c.router({
    getAll: {
        method: 'GET',
        path: '/',
        responses: {
            200: z.object({ data: z.array(tempSchema), totalCount: z.number() }),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
        headers: dataCenterHeaderSchema,
    },
    create: {
        method: 'POST',
        path: '/',
        responses: {
            201: c.type<any>(),
        },
        body: DataCenterPostSchema,
        summary: 'Create data',
        headers: dataCenterHeaderSchema,
    },
    update: {
        method: 'PUT',
        path: '/',
        responses: {
            201: c.type<any>(),
        },
        body: DataCenterPutSchema,
        headers: dataCenterHeaderSchema,
        summary: 'Update data',
    },
    delete: {
        method: 'DELETE',
        path: '/',
        body: DataCenterDeleteSchema,
        headers: dataCenterHeaderSchema,
        summary: 'Delete data',
        responses: {
            201: c.type<any>(),
        },
    },
    validate: {
        method: 'POST',
        path: '/validate',
        body: ValidatePostSchema,
        summary: 'Validate Data',
        responses: {
            200: c.type<any>(),
        },
    },
});

export const item = c.router({
    getAll: {
        method: 'GET',
        path: '/empire-core/item/',
        responses: {
            200: c.type<any>(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
    },
    getById: {
        method: 'GET',
        path: '/empire-core/item/:id/',
        responses: {
            200: z.string(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
    },
});

export const supplier = c.router({
    getAll: {
        method: 'GET',
        path: '/empire-core/supplier/',
        responses: {
            200: c.type<any>(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
    },
    create: {
        method: 'POST',
        path: '/empire-core/supplier/',
        responses: {
            201: c.type<any>(),
        },
        body: supplierPostSchema,
        summary: 'Create data',
    },
    update: {
        method: 'PATCH',
        path: '/empire-core/supplier/:id',
        responses: {
            200: c.type<any>(),
        },
        body: supplierPostSchema,
        summary: 'Update data',
    },
    getById: {
        method: 'GET',
        path: '/empire-core/supplier/:id',
        summary: 'Delete data',
        responses: {
            200: c.type<any>(),
        },
    },
});

export const contact = c.router({
    getAll: {
        method: 'GET',
        path: '/empire-core/contact/',
        responses: {
            200: c.type<any>(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
    },
    create: {
        method: 'POST',
        path: '/empire-core/contact/',
        responses: {
            200: c.type<any>(),
        },
        body: contactPostDtoSchema,
        summary: 'Get data',
    },
    update: {
        method: 'PATCH',
        path: '/empire-core/contact/:id',
        responses: {
            200: c.type<any>(),
        },
        body: contactPostDtoSchema,
        summary: 'Get data',
    },
    getById: {
        method: 'GET',
        path: '/empire-core/contact/:id',
        responses: {
            200: c.type<any>(),
        },
        summary: 'Get data',
    },
    getContactAsRef: {
        method: 'GET',
        path: '/empire-core/contact/data/reference',
        responses: {
            200: c.type<any>(),
        },
        query: referenceSearchQuerySchema,
        summary: 'Get data',
    },
});

export const address = c.router({
    getAll: {
        method: 'GET',
        path: '/empire-core/address/',
        responses: {
            200: c.type<any>(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
    },
    create: {
        method: 'POST',
        path: '/empire-core/address/',
        responses: {
            200: c.type<any>(),
        },
        body: addressPostDtoSchema,
        summary: 'Get data',
    },
    update: {
        method: 'PATCH',
        path: '/empire-core/address/:id',
        responses: {
            200: c.type<any>(),
        },
        body: addressPostDtoSchema,
        summary: 'Get data',
    },
    getById: {
        method: 'GET',
        path: '/empire-core/address/:id',
        responses: {
            200: c.type<any>(),
        },
        summary: 'Get data',
    },
    getContactAsRef: {
        method: 'GET',
        path: '/empire-core/address/data/reference',
        responses: {
            200: c.type<any>(),
        },
        query: referenceSearchQuerySchema,
        summary: 'Get data',
    },
});

export const ApiContract = c.router({
    supplier,
    dataCenter,
    item,
    contact,
    address,
});

// export const TestContract = c.router(
//     { getItem: { path: '/item', method: 'GET', responses: { 200: z.string() } } },
//     { pathPrefix: '/api' },
// );
