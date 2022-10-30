import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { default as superjson } from 'superjson';

import { trpcAppRouter } from '../server/routers/trpcAppRouter';

import { createTrpcContext } from '~~/server/trpcContext';


export const serverQuery = trpcAppRouter.createCaller({});

export const serverQueryWithContext = async () => trpcAppRouter.createCaller(await createTrpcContext());