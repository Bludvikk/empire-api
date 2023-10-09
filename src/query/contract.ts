import { initContract } from '@ts-rest/core';
import {
    DataCenterBaseSchema,
    DataCenterDeleteSchema,
    DataCenterPostSchema,
    DataCenterPrismaQuerySchema,
    DataCenterPutSchema,
    ValidatePostSchema,
    addressPostDtoSchema,
    contactPostDtoSchema,
    supplierPostSchema,
    supplierSchema,
} from '../schema';
import {
    DataCenterBase,
    PortalAuth,
    DataCenterEnum,
    dataCenterHeaderSchema,
    ReferenceSearchQueryDto,
    referenceSearchQuerySchema,
} from '../types/index';
import { z } from 'nestjs-zod/z';
import { AddressPostDto, ContactPostDto } from '../dto';

const c = initContract();

const dataCenter = c.router({
    getAll: {
        method: 'GET',
        path: '/',
        responses: {
            200: c.type<any>(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
        headers: dataCenterHeaderSchema,
    },
    POST: {
        method: 'POST',
        path: '/',
        responses: {
            201: c.type<any>(),
        },
        body: DataCenterPostSchema,
        summary: 'Create data',
        headers: dataCenterHeaderSchema,
    },
    PUT: {
        method: 'PUT',
        path: '/',
        responses: {
            201: c.type<any>(),
        },
        body: DataCenterPutSchema,
        headers: dataCenterHeaderSchema,
        summary: 'Update data',
    },
    DELETE: {
        method: 'DELETE',
        path: '/',
        body: DataCenterDeleteSchema,
        headers: dataCenterHeaderSchema,
        summary: 'Delete data',
        responses: {
            201: c.type<any>(),
        },
    },
    VALIDATE: {
        method: 'POST',
        path: '/validate',
        body: ValidatePostSchema,
        summary: 'Validate Data',
        responses: {
            201: DataCenterBaseSchema,
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
