import { initClient, initContract } from '@ts-rest/core';
import {
    ContactDeleteSchema,
    ContactPostSchema,
    DataCenterDeleteSchema,
    DataCenterPostSchema,
    DataCenterPrismaQuerySchema,
    DataCenterPutSchema,
    MasterContactPutSchema,
    // SupplierResponse,
    ValidatePostSchema,
    addressPostDtoSchema,
    supplierSchema,
} from '../schema';
import {
    DataCenterBase,
    DataCenterTables,
    RefCategory,
    RefDiscount,
    RefPayment,
    RefTerms,
    dataCenterHeaderSchema,
    referenceSearchQuerySchema,
} from '../types/index';
import { z } from 'zod';
import {
    AddressGetResponse,
    AddressResponse,
    ContactPostResponse,
    ContactResponse,
    SupplierGetById,
    SupplierPostResponse,
    SupplierResponse,
    contactGetById,
    contactPutResponse,
    getAddressAsRef,
    getAddressById,
    getContactAsRef,
} from './objShape';
import { promises } from 'dns';
import axios, { Method } from 'axios';

const c = initContract();

export type DataCenter =
    | {
          path: 'category';
          data: RefCategory[];
          totalCount: number;
      }
    | {
          path: 'discount';
          totalCount: number;
          data: RefDiscount[];
      }
    | {
          path: 'payment';
          totalCount: number;
          data: RefPayment[];
      }
    | {
          path: 'terms';
          totalCount: number;
          data: RefTerms[];
      }
    | {
          path: 'common';
          data: DataCenterBase[];
          totalCount: number;
      };

const dataCenter = c.router({
    getAll: {
        method: 'GET',
        path: '/',
        responses: {
            // 200: z.object({ data: z.array(DataCenterBaseSchema.or(z.record(z.any()))), totalCount: z.number() }),
            200: c.type<DataCenter>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
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
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
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
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
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
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
    },
    validate: {
        method: 'POST',
        path: '/validate',
        body: ValidatePostSchema,
        summary: 'Validate Data',
        responses: {
            200: c.type<any>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
    },
});

const item = c.router({
    getAll: {
        method: 'GET',
        path: '/empire-core/item/',
        responses: {
            200: c.type<any>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
    },
    getById: {
        method: 'GET',
        path: '/empire-core/item/:id/',
        responses: {
            200: z.string(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
    },
});

const supplier = c.router({
    getAll: {
        method: 'GET',
        path: '/empire-core/supplier/',
        responses: {
            200: c.type<{ data: SupplierResponse[] }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
    },
    create: {
        method: 'POST',
        path: '/empire-core/supplier/',
        responses: {
            201: c.type<{ data: SupplierPostResponse }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        body: supplierSchema,
        summary: 'Create data',
    },
    update: {
        method: 'PATCH',
        path: '/empire-core/supplier/:id',
        responses: {
            201: c.type<{ data: SupplierPostResponse }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        body: supplierSchema,
        summary: 'Update data',
    },
    getById: {
        method: 'GET',
        path: '/empire-core/supplier/:id',
        summary: 'Delete data',
        responses: {
            200: c.type<{ data: SupplierGetById }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
    },
});

const contact = c.router({
    getAll: {
        method: 'GET',
        path: '/empire-core/contact/',
        responses: {
            200: c.type<{ data: ContactResponse[] }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
    },
    create: {
        method: 'POST',
        path: '/empire-core/contact/',
        responses: {
            201: c.type<{ data: ContactPostResponse }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        body: ContactPostSchema,
        summary: 'Get data',
    },
    update: {
        method: 'PATCH',
        path: '/empire-core/contact',
        responses: {
            201: c.type<{ data: contactPutResponse }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        body: MasterContactPutSchema,
        summary: 'Get data',
    },
    getById: {
        method: 'GET',
        path: '/empire-core/contact/:id',
        responses: {
            200: c.type<{ data: contactGetById }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        summary: 'Get data',
    },
    getContactAsRef: {
        method: 'GET',
        path: '/empire-core/contact/data/reference',
        responses: {
            200: c.type<{ data: getContactAsRef }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        query: referenceSearchQuerySchema,
        summary: 'Get data',
    },
});

const address = c.router({
    getAll: {
        method: 'GET',
        path: '/empire-core/address/',
        responses: {
            200: c.type<{ data: AddressGetResponse }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        query: DataCenterPrismaQuerySchema,
        summary: 'Get data',
    },
    create: {
        method: 'POST',
        path: '/empire-core/address/',
        responses: {
            201: c.type<{ data: AddressResponse }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        body: addressPostDtoSchema,
        summary: 'Get data',
    },
    update: {
        method: 'PATCH',
        path: '/empire-core/address/:id',
        responses: {
            201: c.type<{ data: AddressResponse }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        body: addressPostDtoSchema,
        summary: 'Get data',
    },
    delete: {
        method: 'DELETE',
        path: '/empire-core/address/',
        responses: {
            201: c.type<any>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        body: ContactDeleteSchema,
        summary: 'Get data',
    },
    getById: {
        method: 'GET',
        path: '/empire-core/address/:id',
        responses: {
            200: c.type<{ data: getAddressById }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
        },
        summary: 'Get data',
    },
    getAddressAsRef: {
        method: 'GET',
        path: '/empire-core/address/data/reference',
        responses: {
            200: c.type<{ data: getAddressAsRef[] }>(),
            401: c.type<{ message: string }>(),
            403: c.type<{ message: string }>(),
            404: c.type<{ message: string }>(),
            408: c.type<{ message: string }>(),
            409: c.type<{ message: string }>(),
            410: c.type<{ message: string }>(),
            413: c.type<{ message: string }>(),
            429: c.type<{ message: string }>(),
            500: c.type<{ message: string }>(),
            502: c.type<{ message: string }>(),
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

// function gateway() {
//     const apiKey =
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiZ0xvY2F0aW9uQ29kZSI6ImJnTG9jbWtkbzMiLCJiZ0J1c2luZXNzQ29kZSI6ImJnQnVzVUpWcE8iLCJleHBpcmVzSW4iOiIxMGQiLCJpYXQiOjE2OTM5MDE1NDIsImV4cCI6MTY5NDc2NTU0Mn0.5m3Pv7p-ArTY8oKmAvAKY9amLfEEM0wUKGAIsG_zDkU';

//     const businessCode = 'bgBusUJVpO';
//     return initClient(ApiContract, {
//         baseUrl: ``,
//         baseHeaders: {
//             Authorization: `Bearer ${apiKey}`,
//             'x-business-code': businessCode,
//             'Content-Type': 'application/json',
//         },
//         api: async ({ body, headers, method, path, signal }) => {
//             // return tsRestFetchApi({});
//             // const businessCode = headers.businessCode;

//             const xheaders = new Headers();
//             let urlPath = path + ''; // ---> '/empire-core/item/'

//             if (headers.path) {
//                 urlPath = '/empire-core/data-center/' + headers.path;
//             }

//             const result = await axios.request({
//                 method: method as Method,
//                 url: `http://localhost:4000/api${urlPath}`,
//                 headers,
//                 data: body,
//                 signal,
//             });

//             return { status: result.status, body: result.data, headers: xheaders, signal: result.config.signal };
//         },
//     });
// }

// export const api = gateway();

// async function zz() {
//     const obj = { active: true, code: 'asdasd', name: 'asdasd ', color: 'z' };

//     const res = await api.dataCenter.getAll({ headers: { path: 'category' } });

//     if (res.status === 200) {
//         const result = await res.body;

//         const common = getData(result).common();
//         const category = getData(result).category();
//         const discount = getData(result).discount();

//         common.map((r) => r.id);
//         category.map((r) => r.colorCode);
//         discount.map((r) => r.claim);
//     }

//     const post = await api.dataCenter.create({ headers: { path: 'category' }, body: { values: obj } });

//     return post.body;
// }

// function getData(result: DataCenter) {
//     return {
//         common() {
//             return result.path === 'common' ? result.data ?? [] : [];
//         },
//         category() {
//             return result.path === 'category' ? result.data ?? [] : [];
//         },

//         discount() {
//             return result.path === 'discount' ? result.data ?? [] : [];
//         },
//     };
// }
