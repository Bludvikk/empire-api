import { initContract } from '@ts-rest/core';
import {
    DataCenterBaseSchema,
    DataCenterDeleteSchema,
    DataCenterPostSchema,
    DataCenterPrismaQuerySchema,
    DataCenterPutSchema,
    ValidatePostSchema,
} from '../schema';
import { DataCenterBase, PortalAuth, DataCenterEnum, dataCenterHeaderSchema } from '../types/index';
import { z } from 'nestjs-zod/z';

const c = initContract();

const supplier = c.router({
    get: {
        method: 'GET',
        path: 'brand',
        responses: {
            200: DataCenterBaseSchema,
        },
        headers: z.object({
            pagination: z.string().optional(),
        }),
        query: z.object({
            take: z.string().transform(Number).optional(),
            skip: z.string().transform(Number).optional(),
            search: z.string().optional(),
        }),
        summary: 'Get data',
    },
    create: {
        method: 'POST',
        path: '/:path',
        responses: {
            200: DataCenterBaseSchema,
        },
        body: DataCenterPostSchema,
        summary: 'Create data',
        validateResponseOnClient: true,
    },
    update: {
        method: 'PUT',
        path: '/:path/:id',
        responses: {
            200: DataCenterBaseSchema,
        },
        headers: z.object({ pagination: z.string().optional() }),
        body: DataCenterPutSchema,
        summary: 'Update data',
    },
    delete: {
        method: 'DELETE',
        path: '/:path/:id',
        body: DataCenterBaseSchema,
        summary: 'Delete data',
        responses: {
            200: DataCenterDeleteSchema,
        },
    },
});

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
        headers: dataCenterHeaderSchema,
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

export const ApiContract = c.router({
    supplier,
    dataCenter,
    item,
});

// export const TestContract = c.router(
//     { getItem: { path: '/item', method: 'GET', responses: { 200: z.string() } } },
//     { pathPrefix: '/api' },
// );
