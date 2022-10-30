import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { default as superjson } from 'superjson';

import { trpcAppRouter } from '../server/routers/trpcAppRouter';

import { createTrpcContext } from '~~/server/trpcContext';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getPrefetch = async () => {
  return createProxySSGHelpers({
    router: trpcAppRouter,
    ctx: await createTrpcContext(),
    transformer: superjson,
  });
};
