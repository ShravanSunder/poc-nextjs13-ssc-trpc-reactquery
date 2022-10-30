import { createTRPCReact, httpBatchLink } from '@trpc/react-query';

import type { TrpcAppRouter } from '../server/routers/trpcAppRouter';

const getBaseUrl = (): string => {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return '';

  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};
export const trpc = createTRPCReact<TrpcAppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      // optional
      // headers:  () => {
      //   return {
      //     authorization: getAuthCookie(),
      //   };
      // },
    }),
  ],
});
